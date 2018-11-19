import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import moment from "moment";

export default class Main extends Component {
    state = {
        repositoryInput: "",
        repositories: [],
        repositoryError: false,
        repositoryLoading: false
    };

    handleAddRepository = async e => {
        e.preventDefault();

        this.setState({ repositoryLoading: true });

        try {
            const { data: repository } = await api.get(
                "/repos/" + this.state.repositoryInput
            );

            repository.lastCommit = moment(repository.pushed_at).fromNow();

            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, repository],
                repositoryError: false,
                repositoryLoading: false
            });
        } catch (err) {
            this.setState({ repositoryError: true });
        } finally {
            this.setState({ repositoryLoading: false });
        }
    };
    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                <Form
                    onSubmit={this.handleAddRepository}
                    withError={this.state.repositoryError}
                >
                    <input
                        type="text"
                        placeholder="user/repo"
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                    />
                    <button type="submit">
                        {this.state.repositoryLoading === false
                            ? "Ok"
                            : "Loading..."}
                    </button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
