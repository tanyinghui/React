import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, List, ListItem, ListItemText, AppBar, Tabs, Tab, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { machineControl } from '../../actions/crudAction';
import * as control from '../../constants/machine';

function TabContainer(props) {
	return(
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
};

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		flexgrow: 1,
		backgroundColor: theme.palette.background.paper,
		width: '100%',
	},
});

class ControlBoard extends Component {

	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {

		const { classes } = this.props;
		const { value } = this.state;

		return(
			<div>
				<AppBar className={classes.root}>
					<Tabs
					 value={this.state.value}
					 onChange={this.handleChange}
					 indicatorColor="primary"
					 textColor="primary"
					 centered>
						<Tab label="Machine Sensing" />
						<Tab label="Machine Security" />
						<Tab label="Robotic Motion" />
						<Tab label="Safety Interlocks" />
					</Tabs>
					{value === 0 && <TabContainer>
						<ListItem button onClick={machineControl(control.ALL_STATUS)}>
							<ListItemText primary="Switch and Sensor Values"/>
						</ListItem>
					</TabContainer>}
					{value === 1 && <TabContainer>
						<List component="nav">
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Front Door" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.D1OPEN)}>
										<ListItemText inset primary="Open" />
									</ListItem>
									<ListItem button onClick={machineControl(control.D1CLOSE)}>
										<ListItemText inset primary="Closed" />
									</ListItem>
									<ListItem button onClick={machineControl(control.D1STATUS)}>
										<ListItemText inset primary="Status" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Rear Door" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.D2OPEN)}>
										<ListItemText inset primary="Open" />
									</ListItem>
									<ListItem button onClick={machineControl(control.D2CLOSE)}>
										<ListItemText inset primary="Closed" />
									</ListItem>
									<ListItem button onClick={machineControl(control.D2STATUS)}>
										<ListItemText inset primary="Status" />
									</ListItem>
								</List>
							</Collapse>
						</List>
					</TabContainer>}
					{value === 2 && <TabContainer>
						<List component="nav">
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Belts" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.BELT_FORWARD)}>
										<ListItemText inset primary="Forward" />
									</ListItem>
									<ListItem button onClick={machineControl(control.BELT_BACKWARD)}>
										<ListItemText inset primary="Backward" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Lift" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.LIFT_UP)}>
										<ListItemText inset primary="Up" />
									</ListItem>
									<ListItem button onClick={machineControl(control.LIFT_DOWN)}>
										<ListItemText inset primary="Down" />
									</ListItem>
									<ListItem button onClick={machineControl(control.LIFT_STATUS)}>
										<ListItemText inset primary="Status" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Arm" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.ARM_EXTEND)}>
										<ListItemText inset primary="Extend" />
									</ListItem>
									<ListItem button onClick={machineControl(control.ARM_RETRACT)}>
										<ListItemText inset primary="Retract" />
									</ListItem>
									<ListItem button onClick={machineControl(control.ARM_STATUS)}>
										<ListItemText inset primary="Status" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={machineControl(control.HOME)}>
								<ListItemText primary="Home Sequence"/>
							</ListItem>
						</List>
					</TabContainer>}
					{value === 3 && <TabContainer>
						<List component="nav">
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Movement" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.LOCK)}>
										<ListItemText inset primary="Lock All" />
									</ListItem>
									<ListItem button onClick={machineControl(control.UNLOCK)}>
										<ListItemText inset primary="Unlock All" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Micro Controller" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.RESET)}>
										<ListItemText inset primary="Reboot" />
									</ListItem>
									<ListItem button onClick={machineControl(control.HALT)}>
										<ListItemText inset primary="Halt" />
									</ListItem>
								</List>
							</Collapse>
							<ListItem button onClick={this.handleClick}>
								<ListItemText primary="Conflict Test" />
								{this.state.open ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={this.state.open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem button onClick={machineControl(control.UNSAFE)}>
										<ListItemText inset primary="Remove" />
									</ListItem>
									<ListItem button onClick={machineControl(control.SAFE)}>
										<ListItemText inset primary="Restore" />
									</ListItem>
								</List>
							</Collapse>
						</List>
					</TabContainer>}
				</AppBar>
			</div>
		)
	};
};

export default withStyles(styles)(ControlBoard);