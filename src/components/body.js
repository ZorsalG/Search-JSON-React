import React from "react";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objetos: [],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    objetos: json,
                });
            })
    }

    render() {
        const { objetos } = this.state;
        return (
            <div>
                {
                    objetos.map((objetos) => (
                        <p key={objetos.id}>
                            {objetos.id}  <img src={objetos.thumbnailUrl}></img></p>
                    ))
                }
            </div>
        )
    }
}
export default Body;