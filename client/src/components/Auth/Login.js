import React, { Component } from "react";
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'

const styles = {
    textField: {
        width: '100%',
        marginBottom: 5
    },
    btnBlock: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    }
}

class Login extends Component{
    constructor (props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState({ errors: nextProps.errors })
        }

        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(userData)
    }

    render(){

        const { classes } = this.props;
        const { errors } = this.state;

        return(
            <Paper style={{padding: 15}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        type="email"
                        label="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText= {errors.email ? errors.email: ''}
                        error={errors.email ? true : false}
                    />
                    <TextField 
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.password ? errors.password: ''}
                        error={errors.password ? true : false}
                    />
                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth, 
    erros: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)))