import React, { useRef } from 'react';
import Checkbox from '../Checkbox'
import './styles.css';
import InputField from '../InputField'

var States = () => {
    const tripForm = useRef(null)

    const handleClickEvent = () => {
        const form = tripForm.current
    }

    return (
        <div>
            <form ref={tripForm}>
            <InputField className='input' />
            </form>
            <button className='button' onClick={handleClickEvent}>Enter & Save Trip Name</button>
            <button className='button2' onClick={handleClickEvent}>Save Game Progress</button>
    
            <div>Click the checkbox to save every license plate you see on your trip!</div>
            <div>State List:</div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Alabama</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Alaska</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Arizona</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Arkansas</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>California</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Colorado</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Connecticut</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Delaware</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Florida</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Georgia</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Hawaii</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Idaho</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Illinois</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Indiana</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Iowa</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Kansas</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Kentucky</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Louisiana</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Maine</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Maryland</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Massachusetts</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Michigan</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Minnesota</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Mississippi</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Missouri</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Montana</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Nebraska</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Nevada</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>New Hampshire</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>New Jersey</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>New Mexico</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>New York</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>North Carolina</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>North Dakota</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Ohio</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Oklahoma</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Oregon</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Pennsylvania</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Rhode Island</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>South Carolina</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>South Dakota</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Tennessee</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Texas</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Utah</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Vermont</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Virginia</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Washington</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>West Virginia</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Wisconsin</label>
            </div>
            <div>
            <input type='checkbox' name='state' onClick={Checkbox} />
            <label>Wyoming</label>
            </div>
        </div>
                
            )
        }
        
export default States