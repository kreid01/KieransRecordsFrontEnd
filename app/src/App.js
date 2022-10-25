/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
// Packages
import { Route, Routes} from 'react-router-dom'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// Components
import  Home  from './pages/HomePage'
import  RecordsList  from './pages/RecordsListPage'
import Record from './pages/CurrentRecordPage'
import NewRecord from './pages/NewRecordPage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/UI/NavBar';
import Wishlist from './pages/Wishlist';
import ProfilePage from './pages/ProfilePage';
import Blog from './pages/BlogPage'
import Footer from './components/UI/Footer'
import CheckoutPage from './pages/CheckoutPage'
import './styles.css';
// Functions 
import postRecord  from './services/records/postRecord'
import getAllRecords from './services/records/getAllRecords';
import updatePage from './services/records/getRecordsForPage';
import updateRecord from './services/records/updateRecord';
import getCustomerDetails from './services/customer/getCustomerDetails'
import getCustomerOrders from './services/customer/getCustomerOrders'
// Context

function App() {

const [validated, setValidated] = React.useState(false)
const {user, isAuthenticated, getAccessTokenSilently} = useAuth0()

const [customerOrders, setCustomerOrders] = React.useState([])
const [sortBy, setSortBy] = React.useState('')
const [searchParams, setSearchParams] = React.useState('')
const [genreFilter, setGenreFilter] = React.useState('')
const [wishlist, setWishlist] = React.useState(() => {
  const saved = localStorage.getItem("userWishlist");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
})
const [pageNumber, setPageNumber] = React.useState('1')
const [checkout, setCheckout] = React.useState(false)
const [recordData, setRecordData] = React.useState([])
const [recordDataForPaging, setRecordDataForPaging] = React.useState([])
const [cart, setCart] = React.useState([])
const [customerDetails, setCustomerDetails] = React.useState([])
const [newRecord, setNewRecord] = React.useState({
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
const [formData, setFormData] = React.useState ({
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

React.useEffect(() => {
 getAllRecords(setRecordData)}, [])

React.useEffect(() => {
updatePage(pageNumber, setRecordDataForPaging)}, [pageNumber])

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
  updateRecordsAvialability(recordForUpdating, idForUpdating)
  updateWishlistFromCart(recordForUpdating)
  updateCart(idForUpdating)
  decrementRecordQuantity(id)
  console.log(cart)
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

function updateRecordsAvialability(record, id) {
    const newArr = [...recordData]
    newArr[id].isReservedInCart = true
    setRecordData(newArr)
    console.log(recordData[id])
    updateRecord(record)
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
  
  incrementRecordQuantity(id, ) 
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

function selectGenre(e) {
  if(e.target.value === '0') {
  setGenreFilter('')
  } else {
  setGenreFilter(e.target.value)
  }
}

function changeSearchParams(e) {
  setSearchParams(e.target.value)
}

function changePage(e) {
  setPageNumber(e.target.name)
  window.scrollTo(0, 0)
}

function changeSortBy(e) {
    setSortBy(e.target.value)
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
}

function setGenreFromCurrentRecord(genre) {
  setGenreFilter(genre)
}

function setGenreFilterFromDropdown(genre) {
  setGenreFilter(genre)
}

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
  setGenreFilterFromDropdown={setGenreFilterFromDropdown}
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
    recordData={recordData} />}></Route>
    <Route path='/records'>
      <Route index element={<RecordsList
      resetFilters={resetFilters}
      changePage={changePage}
      changeSortBy={changeSortBy}
      changeSearchParams={changeSearchParams}
      searchData={searchParams} 
      genreFilter={genreFilter}
      selectGenre={selectGenre}
      allRecords={recordData}
      pageNumber={pageNumber}
      recordData={(genreFilter.length > 5 || genreFilter !== '' ? recordData.filter(
      record => record.genres.includes(genreFilter)): (searchParams.length < 2) ? 
      recordDataForPaging : recordData).filter(record => {
        if(record.name.toLowerCase().includes(searchParams.toLowerCase()) || 
        record.artist.toLowerCase().includes(searchParams.toLowerCase())) {
          return record
        }
      }).sort(function(a, b) {
        if(sortBy === 'Price >') {
          return parseFloat(a.price) - parseFloat(b.price)
        } else if(sortBy === 'Price <') {
          return parseFloat(b.price) - parseFloat(a.price)
        } else if(sortBy === 'ReleaseYear >') {
          return parseFloat(a.releaseYear) - parseFloat(b.releaseYear)
        } else if(sortBy === 'ReleaseYear <') {
          return parseFloat(b.releaseYear) - parseFloat(a.releaseYear)
        }else if(sortBy === 'Artist >') {
          if (a.artist < b.artist) {
            return -1;
          } if (a.artist > b.artist) {
            return 1;
          }
          return -0
        } else if(sortBy === 'Artist <') {
          if (a.artist > b.artist) {
            return -1;
          } if (a.artist <  b.artist) {
            return 1;
          }
          return -0
        } else if(sortBy === 'Record Name >') {
          if (a.name < b.name) {
            return -1;
          } if (a.name > b.name) {
            return 1;
          }
          return -0
        } else if(sortBy === 'Record Name <') {
          if (a.name > b.name) {
            return -1;
          } if (a.name <  b.name) {
            return 1;
          }
          return -0
        }   return recordDataForPaging
    })}
      addToCart={addToCart}/>}></Route>
      <Route 
      path=':id' element={<Record 
      setGenreFromCurrentRecord={setGenreFromCurrentRecord}
      recordDataUnique={recordDataUnique}
      changePage={changePage}
      addToWishlist={addToWishlist}
      recordData={recordData}
      addToCart={addToCart}/>}></Route>
      <Route path='new' element={<NewRecord 
      handleChange={handleChange}
      newRecord={newRecord}
      setNewRecord={setNewRecord}
      postRecord={postRecord}
      />}></Route>
      </Route>
      <Route path='/blog' element={<Blog 
      recordData={recordData}/>}></Route>
      <Route path='/collection' element={<Wishlist
      deleteFromWishlist={deleteFromWishlist}
      recordData={recordData}
      addToCart={addToCart}
      wishlist={wishlist}
      />}></Route>
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
      <Route path='/profilepage' element={<ProfilePage
      customerOrders={customerOrders}
      customerDetails={customerDetails}
      recordData={recordData}
      addToCart={addToCart}
      setCustomerDetails={setCustomerDetails}
      deleteFromWishlist={deleteFromWishlist}
      addToWishlist={addToWishlist}
      wishlist={wishlist} />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
  </Routes>
  </div>
  </div>
  <Footer />
  </div>
  )
}

export default App;
