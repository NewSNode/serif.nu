import React from 'react';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Card, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import CurrentlyBrowsing from './CurrentlyBrowsing.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import CalendarContainer from '../containers/CalendarContainer.jsx';
import BrowseContainer from '../containers/BrowseContainer.jsx';
import CartContainer from '../containers/CartContainer.jsx';

const style = {
  column: {
    paddingRight: 0,
    paddingLeft: 0
  },
  browse: {
    maxHeight: '675px',
    overflow: 'scroll',
    position: 'relative', // Necessary for z-index
    zIndex: 1
  },
  overlay: {
    backgroundColor: 'rgba(1, 1, 1, 0.6)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 0
  },
  search: {
    position: 'relative', // Necessary for z-index
    zIndex: 1
  },
  cart: {
    position: 'relative', // Necessary for z-index
    zIndex: 1
  }
};

const mapStateToProps = (state) => ({
  selectingComponent: state.selectingComponent
});

let Serif = ({ selectingComponent }) => (
  <div>
    <Grid fluid>
      <Row>
          {/* The order of the columns is switched:
            the first one is on the right and the second one is on the left.
            (push and pull boot strap column functionality) */}
        <Col style={style.column} md={3} mdPush={9}>
          <Card>
            <CardText>
              <CurrentlyBrowsing />
            </CardText>
          </Card>

          <Tabs>
            <Tab label="Search">
              <Card style={style.search}>
                <CardText>
                  <SearchContainer />
                </CardText>
              </Card>
            </Tab>

            <Tab label="Browse">
              <Card style={style.browse}>
                <CardText>
                  <BrowseContainer />
                </CardText>
              </Card>
            </Tab>

            <Tab label="Cart">
              <Card style={style.cart}>
                <CardText>
                  <CartContainer />
                </CardText>
              </Card>
            </Tab>
          </Tabs>
        </Col>

        <Col style={style.column} md={9} mdPull={3}>
          <CalendarContainer />
        </Col>
      </Row>
    </Grid>
    {/* Gray out rest of screen when selecting components */}
    {selectingComponent && <div style={style.overlay}></div>}
  </div>
);

Serif.propTypes = {
  selectingComponent: React.PropTypes.bool
};

Serif = connect(mapStateToProps)(Serif);

export default Serif;
