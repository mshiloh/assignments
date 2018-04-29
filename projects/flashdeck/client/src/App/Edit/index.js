import React, { Component } from "react";

import { connect } from "react-redux";

import "./style.css";

import EditItem from "./EditItem";

import { getCards } from "../../redux/cards.js";
import { editDeck } from "../../redux/decks.js";

import { onSubmit } from "../../redux/decks.js";

class Edit extends Component {
    componentDidMount() {
        this.props.getCards(this.props.match.params.deckId);
    }
    render() {
        const { data, loading, errMsg } = this.props.cards;

        const editCards = data.map((card, i) => <EditItem key={card + i} {...card}></EditItem>)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        }
        return (
            <div className="editWrapper">
                {/* RENDER DECK TITLE INPUT HERE */}
                {editCards}
                <div className="saveDiscardWrapper">
                    <button className="discardButt" type="submit" /*onClick= saveChanges()*/>Discard</button>
                    <button className="saveButt">Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { getCards })(Edit);