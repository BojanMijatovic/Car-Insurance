import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './MainPage.styles.scss';

const MainPage = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment.Group>
            <Segment>1</Segment>
            <Segment>1</Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment>2</Segment>
            <Segment>2</Segment>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment>3</Segment>
            <Segment>3</Segment>
            <Segment>3</Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MainPage;
