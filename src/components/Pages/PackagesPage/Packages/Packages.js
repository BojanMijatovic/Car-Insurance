import React from 'react';
import { Container, Button, Grid, Segment, Header, Image, Modal } from 'semantic-ui-react';
import './Packages.styles.scss';

const Packages = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Container className='packages'>
      <Header as='h2'>Show more products</Header>
      <p className='packages-subtitle'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum autem magni eaque quae, vero nam dignissimos assumenda
        nemo asperiores dolore fuga aut minima reiciendis sit maxime harum, ut vitae facere. consequatur. <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum autem magni eaque quae, vero nam dignissimos assumenda
      </p>
      <div className='packages-cards'>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Segment className='packages-card'>
                <div className='packages-card__title'>
                  <h4>INTERNATIONAL</h4>
                  <p>500</p>
                </div>
                <div className='packages-card__title'>
                  <h4>PACKAGE</h4>
                  <p>3 Points</p>
                </div>
                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={
                    <Button fluid className='packages-button'>
                      Show More
                    </Button>
                  }
                >
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Header>Info about Package</Header>
                      <p>We've found the following gravatar image associated with your e-mail address.</p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='blue' onClick={() => setOpen(false)} fluid>
                      Send Request
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <h3>Matthew</h3>
                <h3>Matthew</h3>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <h3>Matthew</h3>
                <h3>Matthew</h3>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Button className='packages-button' color='twitter'>
        Find more packages
      </Button>
    </Container>
  );
};

export default Packages;
