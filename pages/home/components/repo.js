import React from 'react'
class repo extends React.Component{
constructor(props){
    super(props)

}
    render(){  
         
        return(
            <div className="row repo">
                <div>
                    <h3 className="title">
                       {this.DataList()}
                    </h3>
                </div>
            </div>
        )
    }
}
function DataList(props) {
            const listItems = this.props.data.map(data =>
                <li>{data.name}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
        }

export default repo