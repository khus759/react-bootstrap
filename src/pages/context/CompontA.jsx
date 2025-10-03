import CompontB from './CompontB';

const CompontA = ({name}) =>{
     return (
        <div>
            <h1>|---Component A</h1>
            <p>This is Component A, part of the context API example.</p>
            <CompontB name= {name}/>
        </div>
    )
}

export default CompontA;