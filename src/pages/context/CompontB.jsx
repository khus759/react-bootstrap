import CompontC from './CompontC';

const CompontB = ({name}) =>{
    return (
        <div>
            <h1>|----Component B</h1>
            <p>This is Component B, part of the context API example.</p>
            <CompontC name= {name} />
        </div>
    )
}
export default CompontB;