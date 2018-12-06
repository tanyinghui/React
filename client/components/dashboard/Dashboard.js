import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MemoryRouter from 'react-router/MemoryRouter';
import { Link } from 'react-router-dom';
import NoSsr from '@material-ui/core/NoSsr';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
{props.children}
</Typography>
  );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function ListItemLink(props) {
    const { primary, to } = props;
    return (
      <li>
        <ListItem button onClick component={Link} to={to}>
          <ListItemText inset primary={primary}/>
        </ListItem>
      </li>
    );
}

ListItemLink.propTypes = {
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        flexgrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class CenteredTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

        render() {
            const { classes } = this.props;
            const { value } = this.state;

            return (
              <NoSsr>
              <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
              <AppBar className={classes.root}>
                <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Machine Sensing" />
        <Tab label="Machine Security" />
        <Tab label="Robotic Motion" />
        <Tab label="Safety Interlocks" />
        </Tabs>
        {value === 0 && <TabContainer><List component="nav">
        <ListItem>
          <ListItemLink to="/all-status" primary="Switch and Sensor Values" />
        </ListItem></List>
        </TabContainer>}
        {value === 1 && <TabContainer><List component="nav">
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Front Door" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/door1/open" inset primary="Open" /></ListItem>
              <ListItem><ListItemLink to="/door1/close" inset primary="Closed" /></ListItem>
              <ListItem><ListItemLink to="/door1/status" inset primary="Status" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Rear Door" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/door2/open" inset primary="Open" /></ListItem>
              <ListItem><ListItemLink to="/door2/open" inset primary="Closed" /></ListItem>
              <ListItem><ListItemLink to="/door2/open" inset primary="Status" /></ListItem>
            </ListItem>
          </List>
        </Collapse></List></TabContainer>}
        {value === 2 && <TabContainer><List component="nav">
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Belts" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/belts/forward" inset primary="Forward" /></ListItem>
              <ListItem><ListItemLink to="/belts/backward" inset primary="Backward" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Lift" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/lift/up" inset primary="Up" /></ListItem>
              <ListItem><ListItemLink to="/lift/down" inset primary="Down" /></ListItem>
              <ListItem><ListItemLink to="/lift/status" inset primary="Status" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Arm" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/arm/extend" inset primary="Extend" /></ListItem>
              <ListItem><ListItemLink to="/arm/retract" inset primary="Retract" /></ListItem>
              <ListItem><ListItemLink to="/arm/status" inset primary="Status" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <ListItemLink to="/home" primary="Home Sequence" />
        </ListItem></List></TabContainer>}
        {value === 3 && <TabContainer><List component="nav">
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Movement" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/lock" inset primary="Lock All" /></ListItem>
              <ListItem><ListItemLink to="/unlock" inset primary="Unlock All" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Micro Controller" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/reset" inset primary="Reboot" /></ListItem>
              <ListItem><ListItemLink to="/halt" inset primary="Halt" /></ListItem>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary="Conflict Test" />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItem><ListItemLink to="/unsafe" inset primary="Remove" /></ListItem>
              <ListItem><ListItemLink to="/safe" inset primary="Restore" /></ListItem>
            </ListItem>
          </List>
        </Collapse></List></TabContainer>}
    </AppBar>
    </MemoryRouter>
    </NoSsr>
      );
        }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
