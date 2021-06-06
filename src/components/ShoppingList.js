import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Button} from 'reactstrap'



const foodItems = [
    {name: 'Milk', id: uuid()},
    {name: 'Butter', id: uuid()},
    {name: 'Mango', id: uuid()},
    {name: 'Honey', id: uuid()}
]

const ShoppingList = () => {
const [items, setItems] = useState(foodItems)

    return (
        <div>
            <h4>Shopping List</h4>
            <Button  className="add-btn"
                             color="success"
                             size="sm"
                             onClick={()=>{
                                 const name = prompt('Add your shopping List')
                                 if(name){
                                    setItems([...items, {name, id: uuid()}])
                                 }
                             }}
                             > 
                                Add +
                             </Button>
            {items.map(({id, name}) => {
                return (
                    <ListGroup className="list-group" key={id}>
                         <ListGroupItem key={id}>
                             <Button 
                             className="remove-btn"
                             color="danger"
                             size="sm"
                             onClick={() => {
                                setItems(items.filter(x => x.id !==id))
                             }}> 
                                 &times;
                             </Button>
                             {name}
                        </ListGroupItem>
                    </ListGroup>
                );
            })}

            {!items.length && <h5>Sorry! There are no results</h5>}
        </div>
    )
}

export default ShoppingList
