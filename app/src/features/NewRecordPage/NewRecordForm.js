import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function NewRecordForm(props) {

        const [validated, setValidated] = React.useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };      
    
    const genreOptions = 
    <>
    <option value="0">Select genre:</option>
    <option value="Art Rock">Art Rock</option>
    <option value="Alternative Rock">Alternative Rock</option>
    <option value="Pop Rock">Pop Rock</option>
    <option value="Hard Rock">Hard Rock</option>
    <option value="Glam Rock">Glam Rock</option>
    <option value="Progressive Rock">Progressive Rock</option>
    <option value="Symphonic Rock">Symphonic Rock</option>
    <option value="Post-Rock">Post-Rock</option>
    <option value="Blues Rock">Blues Rock</option>
    <option value="Experimental Rock">Experimental Rock</option>
    <option value="Folk Rock">Folk Rock</option>
    <option value="Psychedelic Rock">Psychedelic Rock</option>
    <option value="Space Rock">Space Rock</option>
    <option value="Jazz Rock">Jazz Rock</option>
    <option value="Funk Rock">Funk Rock</option>
    <option value="Shoegaze">Shoegaze</option>
    <option value="Slowcore">Slowcore</option>
    <option value="Drone">Drone</option>
    <option value="Noise Rock">Noise Rock</option>
    <option value="Concious Hip Hop">Concious Hip Hop</option>
    <option value="West Coast Hip Hop">West Coast Hip Hop</option>
    <option value="East Coast Hip Hop">East Coast Hip Hop</option>
    <option value="Southern Hip Hop">Southern Hip Hop</option>
    <option value="Experimental Hip Hop">Experimental Hip Hop</option>
    <option value="Industrial Hip Hop">Industrial Hip Hop</option>
    <option value="Trap">Trap</option>
    <option value="Cloud Rap">Cloud Rap</option>
    <option value="Abstract Hip Hop">Abstract Hip Hop</option>
    <option value="Instrumental Hip Hop">Instrumental Hip Hop</option>
    <option value="Trip Hop">Trip Hop</option>
    <option value="Plunderphonics">Plunderphonics</option>
    <option value="Hardcore Hop Hop">Hardcore Hip Hop</option>
    <option value="Jazz Rap">Jazz Rap</option>
    <option value="Pop Rap">Pop Rap</option>
    <option value="Boom Bap">Boom Bap</option>
    <option value="Neo-Soul">Neo-Soul</option>
    <option value="Funk">Funk</option>
    <option value="Contemporary R&B">Contemporary R&B</option>
    <option value="Alternative R&B">Alternative R&B</option>
    <option value="New Wave">New Wave</option>
    <option value="Post-Punk">Post-Punk</option>
    <option value="Ska">Ska</option>
    <option value="Gothic-Rock">Gothic-Rock</option>
    <option value="Colwave">Coldwave</option>
    <option value="Proto-Punk">Proto-Punk</option>
    <option value="Art-Punk">Art-Punk</option>
    <option value="Post-Punk Revival">Post-Punk Revival</option>
    <option value="Dance Punk">Dance Punk</option>
    <option value="Indie Folk">Indie Folk</option>
    <option value="Indie Rock">Indie Rock</option>
    <option value="Psychedelic Folk">Psychedelic Folk</option>
    <option value="Singer-Songwriter">Singer-Songwriter</option>
    <option value="Lo-Fi / Slacker Rock">Lo-Fi / Slacker Rock</option>
    <option value="Midwest Emo">Midwest Emo</option>
    <option value="Emo">Emo</option>
    <option value="Post-Hardcore">Post-Hardcore</option>
    <option value="Math Rock">Math Rock</option>
    <option value="Avant-Prog">Avant-Prog</option>
    <option value="Chamber Pop">Chamber Pop</option>
    <option value="Psychedelic Pop">Psychedelic Pop</option>
    <option value="Noise Pop">Noise Pop</option>
    <option value="Alternative Pop">Alternative Pop</option>
    <option value="Ambient Pop">Ambient Pop</option>
    <option value="Art Pop">Art Pop</option>
    <option value="Baroque Pop">Baroque Pop</option>
    <option value="Dream Pop">Dream Pop</option>
    <option value="Synthpop">Synthpop</option>
    <option value="Heavy Metal">Heavy Metal</option>
    <option value="Thrash Metal">Thrash Metal</option>
    <option value="echnical Death Metal">Technical Death Metal</option>
    <option value="Progressive Metal">Progressive Metal</option>
    <option value="Alternative Metal">Alternative Metal</option>
    <option value="Metalcore">Metalcore</option>
    <option value="Mathcore">Mathcore</option>
    <option value="Hardcore Punk">Hardcore Punk</option>
    <option value="Punk Rock">Punk Rock</option>
    <option value="Avante-Garde Jazz">Anarcho-Punk</option>
    <option value="Sludge Metal">Sludge Metal</option>
    <option value="Atmospheric Sludge Metal">Atmospheric Sludge Metal</option>
    <option value="Black Metal">Black Metal</option>
    <option value="Symphonic Black Metal">Symphonic Black Metal</option>
    <option value="Spiritual Jazz">Spiritual Jazz</option>
    <option value="Avante-Garde Jazz">Avante-Garde Jazz</option>
    <option value="Jazz-Fusion">Jazz-Fusion</option>
    <option value="Cool Jazz">Cool Jazz</option>
    <option value="Modal Jazz">Modal Jazz</option>
    <option value="Ambient">Ambient</option>
    <option value="Electronic">Electronic</option>
    <option value="IDM">IDM</option>
    <option value="Downbeat">Downtempo</option>
    <option value="Ambient Techno">Ambient Techno</option>
    </>

    return (
            <div className='new--record--form'>
            <h1 className='page--header'>New Record</h1>
            <Form className='form' noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className='mb-6'>
                    <Form.Group as={Col} md='6'>
                    <FloatingLabel
                    controlId='floatingInput'
                    label='Ablum title'
                    className='mb-3'>
                    <Form.Control
                    type='text' 
                    name='name'
                    placeholder='Ablum title'
                    class='form-control'
                    value={props.newRecord.name.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    required
                    />
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validateCustom01'>
                      <FloatingLabel
                      controlId='floatingInput'
                      label='Artist'
                      className='mb-3'>
                      <Form.Control
                        for='artist'
                        type='text' 
                        name='artist'
                        required
                        class='form-control'
                        placeholder='Artist'
                        value={props.newRecord.artist.value}
                        onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        </Form.Control>
                     </FloatingLabel>
                    </Form.Group>
                    </Row>
                        <Form.Group as={Col} md={12}>
                        <FloatingLabel
                        controlId='floatingInput'
                        label='Image URL'
                        className='mb-3'>
                        <Form.Control
                        type='text' 
                        name='imageUrl'
                        placeholder=' '
                        value={props.newRecord.imageUrl.value}
                        onChange={(e) => props.handleChange(e, props.setNewRecord)}
                        pattern="/(https?:\/\/.*\.(?: png|jpg))/i"
                        required
                        class='form-control'/>
                        <Form.Control.Feedback type="invalid">Please provide a valid image url</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Row>
                    <Form.Group as={Col} md='4'>
                    <FloatingLabel
                    controlId='floatingInput'
                    label='Release Year'
                    className='mb-3'>
                    <Form.Control 
                    type='number' 
                    name='releaseYear'
                    placeholder=' '
                    value={props.newRecord.releaseYear.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    required
                    class='form-control'/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md='4'>
                    <FloatingLabel
                    controlId='floatingInput'
                    label='Song Count'
                    className='mb-3'>
                    <Form.Control 
                    type='number' 
                    placeholder=' '
                    name='songCount'
                    value={props.newRecord.songCount.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    required
                    class='form-control'
                    />
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md='4'>
                    <FloatingLabel
                    controlId='floatingInput'
                    label='Price'
                    className='mb-3'>
                    <Form.Control 
                    type='decimal' 
                    placeholder='Record Price'
                    name='price'
                    data-val="true"
                    value={props.newRecord.price.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}
                    required
                    class='form-control'/>
                    </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <div className='genre--selectors'>
                    <Form.Select
                    type='text' 
                    placeholder='Record Genre'
                    name='genres'
                    required
                    class='form-control'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </Form.Select>                
                    <Form.Select 
                    type='text' 
                    placeholder='Record Genre'
                    name='genres'
                    required
                    class='form-control'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </Form.Select>
                    <Form.Select 
                    type='text' 
                    class='form-control'
                    placeholder='Record Genre'
                    name='genres'
                    value={props.newRecord.genres.value}
                    onChange={(e) => props.handleChange(e, props.setNewRecord)}>
                        {genreOptions}
                    </Form.Select>
                    </div>
                    <Button 
                     style={props.inputThemeStyles}
                     className='submit--button'
                    type="Submit" onClick={() => props.postRecord(props.newRecord, props.setNewRecord)}>Submit Record</Button> 
            </Form>
     </div>
     )
}