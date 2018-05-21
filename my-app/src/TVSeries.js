import React, { Component } from 'react';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';
import './TVSeries.css';

class TVSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: this.props.episodes,
            adding: false,
            editing: false,
            addForm: {},
            currentEpisode: {}
        };
        this.addEpisode = this.addEpisode.bind(this);
        this.editEpisode = this.editEpisode.bind(this);
        this.removeEpisode = this.removeEpisode.bind(this);
        this.saveEpisode = this.saveEpisode.bind(this);
        this.addForm = this.addForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, field) {
        console.log(e.target, this.state.addForm);
        const currentVal = e.target.value;
        currentVal && this.setState(prevState => {
            return (
                this.state.adding ?
                    {
                        addForm: {
                            ...prevState.addForm,
                            [field]: currentVal
                        }
                    } :
                    {
                        currentEpisode: {
                            ...prevState.currentEpisode,
                            [field]: currentVal
                        }
                    })
        })
    }
    addEpisode() {
        this.setState({
            adding: true
        });
    }

    editEpisode(episodeId) {
        this.setState({
            currentEpisode: this.state.episodes.filter(episode => episode["imdbID"] === episodeId)[0],
            editing: true
        });
    }

    saveEpisode(e) {
        e.preventDefault();
        const newEpisode = this.state.adding ? {
            ...this.state.addForm,
            imdbID: Date.now()
        }
            : {
                ...this.state.currentEpisode,
                imdbID: this.state.currentEpisode.imdbID
            };
        console.log('newEpisode', this.state.addForm);
        this.setState(prevState => {
            const { episodes } = prevState;
            const unchangedEpisodes = episodes.filter(episode => episode["imdbID"] !== this.state.currentEpisode.imdbID);
            const updatedEpisodes = this.state.adding ? [
                ...episodes,
                newEpisode
            ] : [
                    ...unchangedEpisodes,
                    newEpisode
                ];
            console.log(updatedEpisodes, "newEpisode");
            return (
                {
                    episodes: updatedEpisodes,
                    adding: false,
                    editing: false,
                    addForm: {},
                    currentEpisode: {}
                })
        })
    }

    removeEpisode(episodeId) {
        this.setState(prevState => ({
            episodes: prevState.episodes.filter(episode => episode.imdbID !== episodeId)
        }))
    }

    addForm() {
        const { adding, editing, currentEpisode } = this.state;
        console.log('curent', currentEpisode);
        return (
            (adding || editing) && <div>
                <h3> {adding ? "Please provide the details of the episode" :
                    "Please edit the selected episode"}
                </h3>
                <form className="addForm" onSubmit={this.saveEpisode}>
                    <span>Title: <input
                        onChange={(e) => this.handleChange(e, 'Title')}
                        defaultValue={editing ? currentEpisode.Title : ''} /></span>
                    <span>Released:  <input
                        onChange={(e) => this.handleChange(e, 'Released')}
                        defaultValue={editing ? currentEpisode.Released : ''} /></span>
                    <span>Episode:  <input
                        onChange={(e) => this.handleChange(e, 'Episode')}
                        defaultValue={editing ? currentEpisode.Episode : ''} /></span>
                    <span>imdbRating:  <input
                        onChange={(e) => this.handleChange(e, 'imdbRating')}
                        defaultValue={editing ? currentEpisode.imdbRating : ''} /></span>
                    <span><button className="saveButton"><FaFloppyO /></button></span>
                </form>
            </div>
        )
    }

    renderDisplay() {
        const tableHeaders = ["Episode", "Title", "Released", "imdbRating", "imdbID", "Action"];
        return (
            <div >
                <h2>Game of Thrones TV Series Episodes!</h2>
                <span>
                    <label style={{color:'green',padding:10+'px'}}>Would you like to add a new Episode?</label>
                    <button onClick={this.addEpisode}><FaPlusCircle /></button>
                </span>
                <center><table className="TVSeries">
                    <thead>
                        {/* title of table starts here */}

                        <tr className="TVSeriesHead">
                            {
                                // mapping with label to table headers
                                
                                tableHeaders.map((label, i) => <th className="TVSeriesColumn" key={i}>{label}</th>) 
                            }
                        </tr>

                        {/* title of table ends here */}
                    </thead>
                    <tbody>
                        {
                            this.state.episodes.map((episode, i) => {
                                return (<tr className="TVSeriesRow" key={i}>
                                    {
                                        tableHeaders.map((label, j) => {
                                            return (
                                                label !== "Action" ?
                                                    <td className="TVSeriesColumn" key={j}>{episode[label]}</td>
                                                    :
                                                    <td className="TVSeriesColumn" key={j}>
                                                        <button onClick={() => { this.editEpisode(episode['imdbID']) }}><FaEdit /></button>
                                                        <button onClick={() => { this.removeEpisode(episode['imdbID']) }}><FaTrash /></button>
                                                    </td>
                                            )
                                        })
                                    }
                                </tr>)
                            }
                            )}
                    </tbody>
                </table></center>
            </div>
        )
    }

    render() {
        return (this.state.adding || this.state.editing) ? this.addForm() : this.renderDisplay();

    }
}

export default TVSeries;