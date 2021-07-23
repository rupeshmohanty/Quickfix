import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { useParams, Redirect } from 'react-router';
import { Button, Header, Image, Grid } from 'semantic-ui-react';
import task from './task.svg';

// getting the required components!
import NavbarComponent from './NavbarComponent';

function IssueDetails() {
    let { id } = useParams();

    const userLoggedIn = sessionStorage.getItem('userData');
    const [issue,setIssue] = useState([]);
    const [message,setMessage] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/get-issue/'+ id)
        .then(res => {
            if(res.data.status) {
                setIssue(res.data.issueData)
            } else {
                setMessage(res.data.message)
            }
        })
        .catch((error) => console.log(error));
    })

    if(userLoggedIn) {
        const phone = "tel:" + issue.phone; 
        return(
           <>
                <NavbarComponent/>
                <Grid style = {{ marginTop: '100px' }} container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width = {8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            { issue.brief }
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            { issue.description }
                        </p>
                        <p>
                            Customer Name: { issue.name }
                        </p>
                        <p>
                            Address: { issue.address }
                        </p>
                        <p>
                            Technician required: { issue.technician }
                        </p>
                        </Grid.Column>
                        <Grid.Column floated = "right" width = {6}>
                            <Image bordered rounded size='large' src= { task }/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign = 'center'>
                            <Button size = 'huge'><a href = { phone }>Contact customer</a></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
           </>
        )
    } else {
        return(<Redirect to = {'/'}/>)
    }
}

export default IssueDetails;