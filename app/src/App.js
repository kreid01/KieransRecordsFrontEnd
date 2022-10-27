/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
// Packages
import { Route, Routes} from 'react-router-dom'
import {useState, useEffect, useCallback, useRef} from 'react'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// Components
import  Home  from './pages/HomePage'
import  RecordsList  from './pages/RecordsListPage'
import Record from './pages/CurrentRecordPage'
import NewRecord from './pages/NewRecordPage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/UI/NavBar'
import Wishlist from './pages/Wishlist'
import ProfilePage from './pages/ProfilePage'
import Blog from './pages/BlogPage'
import Footer from './components/UI/Footer'
import CheckoutPage from './pages/CheckoutPage'
import './styles.css'
// Functions 
import postRecord  from './services/records/postRecord'
import getAllRecords from './services/records/getAllRecords'
import useGetRecordsForPage from './hooks/useGetRecordsForPage'
import updateRecord from './services/records/updateRecord'
import getCustomerDetails from './services/customer/getCustomerDetails'
import getCustomerOrders from './services/customer/getCustomerOrders'

function App() {

const [validated, setValidated] = useState(false)
const {user, isAuthenticated, getAccessTokenSilently} = useAuth0()
const [query, setQuery] = useState({
  sortBy: '',
  genreFilter: ''
});
const [page, setPage] = useState(0)
const [isReset, setIsReset] = useState(false)
const { loading, error, records } = useGetRecordsForPage(query, page, isReset, setIsReset);
const loader = useRef(null);
const [customerOrders, setCustomerOrders] = useState([])
const [sortBy, setSortBy] = React.useState('0')
const [searchParams, setSearchParams] = useState('')
const [genreFilter, setGenreFilter] = useState('0')
const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem("userWishlist");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
})
const [checkout, setCheckout] = useState(false)
const [recordData, setRecordData] = useState([])
const [cart, setCart] = React.useState([])
const [customerDetails, setCustomerDetails] = useState([])
const [newRecord, setNewRecord] = useState({
  name:'',
  artist:'',
  releaseYear: 0,
  imageUrl:'',
  duration: '',
  songCount: 0,
  price: 0,
  genres: [],
  format: ''
})
const [formData, setFormData] = useState ({
  firstName:'',
  secondName:'',
  email: '',
  phoneNumber:0,
  addressFirstLine: '',
  addressSecondLine: '',
  postcode: '',
})
const totalPrice = cart.reduce((acc, record) => {
    return acc += (record.price * record.quantityInCart.toFixed(2))
}, 0)
const totalQuantity  = cart.reduce((acc, record) => {
  return acc + record.quantityInCart
}, 0)

const recordDataUnique = recordData.reduce((acc, rec) => {
  if(!acc.find(u => u.name === rec.name)) {
      acc.push(rec)
  }
  return acc
}, [])

React.useEffect(() => {
  localStorage.setItem('userWishlist', JSON.stringify(wishlist));
}, [wishlist]);

useEffect(() => {
  getAllRecords(setRecordData)
},[])

function goToCheckout() {
  setCheckout(prevState => !prevState)
}
  
 async function addToCart(record, id) {
  if(recordData[id].quantity >= 1) {
  let recordForUpdating = record
  let idForUpdating = id
  if(record.isReservedInCart) {
    recordData.map((rec, i) => {
      if(rec.name === record.name && rec.isReservedInCart === false) {
        recordForUpdating = rec
        idForUpdating = i
      }
    })
  }
  updateRecordsAvailability(recordForUpdating, idForUpdating)
  updateWishlistFromCart(recordForUpdating)
  updateCart(idForUpdating)
  decrementRecordQuantity(id)
 } }

 function updateWishlistFromCart(record) {
  wishlist.map((rec , i) => {
    if(rec.name === record.name) {
      const newArrForDeletingOffWishlist = [...wishlist]
      newArrForDeletingOffWishlist.splice(i, 1)
      setWishlist(newArrForDeletingOffWishlist)
    }
  })
}

function updateRecordsAvailability(record, id) {
  const newArr = [...recordData]
  newArr[id].isReservedInCart = true
  setRecordData(newArr)
  updateRecord(record)
}

function decrementRecordQuantity(id) {
  const newArrForChanging = [...recordData]
  newArrForChanging[id].quantity = newArrForChanging[id].quantity - 1 
  setRecordData(newArrForChanging)
}

function updateCart(id) {
      setCart(prevArr => [...prevArr, {
      ...recordData[id],
      quantityInCart: 1,
      totalPrice: recordData[id].price}])
}

 function emptyCartOnSuccessfulPayment() {
  setCart([])
 }

function setRecordsAsSold() {
  const newCartArr = [...cart] 
  newCartArr.map(record => {
      record.isAvailable = false 
  })
  setCart(newCartArr)
}

function decrementRecordInCart(i, id) {
  updateCartQuantity(id)
  incrementRecordQuantity(id) 
}

function incrementRecordQuantity(id) {
  const newArrForChanging = [...recordData]
  newArrForChanging[id].quantity = newArrForChanging[id].quantity + 1 
  setRecordData(newArrForChanging)
}

function updateCartQuantity(id) {
  const recordToDecrement = cart.indexOf(recordData[id].name)
  const newCartArr = cart
  newCartArr.splice(recordToDecrement, 1)
  setCart(newCartArr)
}

function addToWishlist(record, id) {
  let isRecordPresent = checkIfRecordAlreadyPresent(record)
  console.log(isRecordPresent)
  if(!isRecordPresent) {
  setWishlist(prevArr => [...prevArr, recordData[id]])
  }
}

function checkIfRecordAlreadyPresent(record) {
  let isRecordPresent = false
  wishlist.map(rec => {
    if(rec.name === record.name) {
      isRecordPresent = true
    }})
  return isRecordPresent
  }

function deleteFromWishlist(id) {
  if(wishlist.length > 1){
    const newArr = [...wishlist]
    newArr.splice(id, 1)
    setWishlist(newArr)
  } else {
    setWishlist(wishlist.pop(id))
    setWishlist([])
  }
}

function changeSearchParams(e) {
  setSearchParams(e.target.value)
}

function handleChange(e, setNew) {
  setNew(prevObj => ({
    ...prevObj,
    [e.target.name]: (e.target.name === 'genres') ?
     [...prevObj.genres, (e.target.value)]: 
     e.target.value
    }))
  }


function resetFilters() {
  setSearchParams('')
  setGenreFilter('')
  setSortBy('')
  setPage(1)
  setIsReset(true)
  setQuery({
    sortBy: '',
    genreFilter: ''
  })
}

function setGenreForPagedRecords(genre) {
  setQuery(prevQuery => ({
    ...prevQuery, genreFilter: genre
  }))
  setIsReset(true)
  setPage(1)
  setGenreFilter(genre)
}

function changeSortBy(sorter) {
  setQuery(prevQuery => ({
    ...prevQuery, sortBy: sorter
  }))
  setIsReset(true)
  setPage(1)
  setSortBy(sorter)

}

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);


React.useEffect(() => {
  (async () => {
    if(isAuthenticated) {
    try {
      getCustomerOrders(setCustomerOrders, user.sub);
      getCustomerDetails(setCustomerDetails, user.sub)
    } catch (e) {
      console.error(e);
    }
  }})();
}, [isAuthenticated]);

  return (
  <div className='site'>
  <NavBar 
  setGenreForPagedRecords={setGenreForPagedRecords}
  goToCheckout={goToCheckout}
  cart={cart}
  recordData={recordData}
  checkout={checkout}
  totalQuantity={totalQuantity}
  totalPrice={totalPrice}
  addToWishlist={addToWishlist}
  addToCart={addToCart}
  decrementRecordInCart={decrementRecordInCart}
 />
  <div className='page--container'>
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Home
        recordDataUnique={recordDataUnique}
        addToCart={addToCart}
        recordData={recordData} />}>
        </Route>
        <Route 
        path='/records'>
          <Route index element={<RecordsList
          resetFilters={resetFilters}
          changeSortBy={changeSortBy}
          changeSearchParams={changeSearchParams}
          sortBy={sortBy}
          searchData={searchParams} 
          genreFilter={genreFilter}
          setGenreForPagedRecords={setGenreForPagedRecords}
          allRecords={recordData}
          recordData={records.filter(record => {
            if(record.name.toLowerCase().includes(searchParams.toLowerCase()) || 
            record.artist.toLowerCase().includes(searchParams.toLowerCase())) {
              return record
          }})}
          addToCart={addToCart}
          loader={loader}
          loading={loading}
          error={error}/>}>
          </Route>
          <Route 
          path=':id' 
          element={<Record 
          setGenreForPagedRecords={setGenreForPagedRecords}
          recordDataUnique={recordDataUnique}
          addToWishlist={addToWishlist}
          recordData={recordData}
          addToCart={addToCart}/>}>

          </Route>
          <Route 
          path='new' element={<NewRecord 
          handleChange={handleChange}
          newRecord={newRecord}
          setNewRecord={setNewRecord}
          postRecord={postRecord}/>}>
          </Route>
          </Route>
          <Route path='/blog' 
          element={<Blog 
          recordData={recordData}/>}>
          </Route>
          <Route 
          path='/collection' 
          element={<Wishlist
          deleteFromWishlist={deleteFromWishlist}
          recordData={recordData}
          addToCart={addToCart}
          wishlist={wishlist}/>}>
          </Route>
          <Route path='/cart' 
          element={<CheckoutPage
          validated={validated}
          setValidated={setValidated}
          customerDetails={customerDetails}
          handleChange={handleChange}
          setFormData={setFormData}
          formData={formData}
          recordData={recordData}
          recordDataUnique={recordDataUnique}
          emptyCartOnSuccessfulPayment={emptyCartOnSuccessfulPayment}
          checkout={checkout}
          goToCheckout={goToCheckout}
          decrementRecordInCart={decrementRecordInCart}     
          totalPrice={totalPrice}
          cart={cart}
          setRecordsAsSold={setRecordsAsSold}/>}>
          </Route>
          <Route
          path='/profilepage' 
          element={<ProfilePage
          customerOrders={customerOrders}
          customerDetails={customerDetails}
          recordData={recordData}
          addToCart={addToCart}
          setCustomerDetails={setCustomerDetails}
          deleteFromWishlist={deleteFromWishlist}
          addToWishlist={addToWishlist}
          wishlist={wishlist} />}>
          </Route>
          <Route path='*'
          element={<NotFoundPage />}>
          </Route>
      </Routes>
    </div>
  </div>
  <Footer />
  </div>
  )
}

export default App;
