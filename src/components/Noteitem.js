import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const oncopy=(props)=>{
//         <div className="alert alert-success" role="alert">
//         Succesfully Copied To clipboard
// </div>
        // var text=document.getElementsByClassName("card-text");
        // var m= 
        // note.description.select();
        // note.description.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(note.description);
      alert("Succesfully Copied To clipboard !!");
        // props.showAlert("Succesfully logged ","success");
        // console.log("iam copied");
        
            }

    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                        <i className="far fa-copy mx-2" onClick={oncopy}></i>

                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem