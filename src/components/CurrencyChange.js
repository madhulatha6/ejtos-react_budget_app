import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyChange = (props) => {
    const [name, setName] = useState('');
    const handleSelectChange = (event) => {
        setName(event.target.value);
    };

    return(
<div>


Currency
<select style={{backgroundColor: 'lightgreen' }} className="custom-select" id="inputGroupSelect01" onChange={handleSelectChange}>

    <option value="$ Dollar" name="dollar"> $ Dollar
    </option>
<option value="£ Pound" name="pound">£ Pound
    
</option>
<option value="€ Euro" name="euro">€ Euro</option>
<option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>

</select>

</div>
    );
};

export default CurrencyChange;