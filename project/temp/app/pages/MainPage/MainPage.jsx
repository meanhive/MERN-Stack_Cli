import React from 'react'

import Greeting from '../../components/greeting/Greeting'

export default class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="mainPage">
                <Greeting />
            </div>
            )
        }
}