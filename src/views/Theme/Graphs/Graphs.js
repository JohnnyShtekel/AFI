import ReactDOM from 'react-dom';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  CardColumns,
  Tooltip
} from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

import axios from 'axios';
import ProgressButton from 'react-progress-button'
const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['10.8.18', '12.8.18', '14.8.18', '15.8.18', '17.8.18', '20.8.18'],
  datasets: [
    {
      label: 'Manual actions',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [20, 15, 40, 5,  10, 2],
    },
    {
      label: 'Auto Actions',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [40,10, 10, 15, 10,10 ],
    },
  ],
};

const doughnut = {
  labels: [
    'Yoni1',
    'Yoni2',
    'Yoni3',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 50,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};


const featureDrop = ['Shimi', 'David']

const bar = {
  labels: ['diversity', 'ad type under represented', 'explore new targeting', 'client request', 'automated process fails', 'campaign limited by budget'],
  datasets: [
    {
      label: 'manual actions reasoning graph',
      backgroundColor: 'rgba(255,99,132,1)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [70,20,10,10,20,15],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}



class ThemeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'rgb(255, 255, 255)'
    }
  }

  componentDidMount () {
    const elem = ReactDOM.findDOMNode(this).parentNode.firstChild
    const color = window.getComputedStyle(elem).getPropertyValue('background-color')
    this.setState({
      bgColor: color || this.state.bgColor
    })
  }

  render() {

    return (
      <table className="w-100">
        <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{ rgbToHex(this.state.bgColor) }</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{ this.state.bgColor }</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

class ThemeColor extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {

    // const { className, children, ...attributes } = this.props
    const { className, children } = this.props

    const classes = classNames(className, 'theme-color w-75 rounded mb-3')

    return (
      <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
        <div className={classes} style={{paddingTop: '75%'}}></div>
        {children}
        <ThemeView/>
      </Col>
    )
  }
}

class Graphs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onDropClick = this.onDropClick.bind(this);


    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpenFeature: false,
      dropdownOpenProvider:false,
      dropdownOpenAccount:false,
      dropdownOpenCampaign:false,
      dropdownOpenDR:false,
      tooltipOpen: false,
      buttonState: '',
      start_date: moment(),
      end_date: moment(),
      feature:"",
      provider:"",
      account:"",
      campaign:"",
      dr:"",
    };
  }

  componentDidMount() {
    axios.post('http://192.168.56.69:8004/get_amount_of_every_action_in_specific_date', {
      start_date: '10-8-2018',
      end_date: '14-8-2018',
      provider: 'facebook',
      account: 1,
      campaign:1,
      feature: "Yoni"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleClick () {
   this.setState({buttonState: 'loading'})
   // make asynchronous call
   setTimeout(() => {
     this.setState({buttonState: 'success'})
   }, 3000)
 }

  toggle(dropDownName) {
    this.setState({
      [dropDownName]: !this.state[dropDownName],
    });
  }

  onDropClick(evt){
    console.log(evt.target.value);
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  inputChangeHandler(event, name) {
    this.setState({ [name]: event.target.value });
  }



  render() {

    return (
      <div className="animated fadeIn">
        <Row>
        <Col sm="2" md={{ size: 10, offset: 1 }}>
        <Card>
        <CardBody>
          <Row>
            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpenFeature} toggle={()=>this.toggle('dropdownOpenFeature')}>
                         <DropdownToggle caret>
                           Feature
                         </DropdownToggle>
                         <DropdownMenu>
                           {featureDrop.map((item, i) => (
                               <DropdownItem value={item} key={i} onClick={this.onDropClick} >{item}</DropdownItem>
                            ))}
                         </DropdownMenu>
                       </Dropdown>
            </Col >
            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpenProvider} toggle={()=>this.toggle('dropdownOpenProvider')}>
                         <DropdownToggle caret>
                           Provider
                         </DropdownToggle>
                         <DropdownMenu>
                           {featureDrop.map((item, i) => (
                               <DropdownItem value={item} key={i} onClick={this.onDropClick} >{item}</DropdownItem>
                            ))}
                         </DropdownMenu>
                       </Dropdown>
            </Col >
            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpenAccount} toggle={()=>this.toggle('dropdownOpenAccount')}>
                         <DropdownToggle caret>
                           Account
                         </DropdownToggle>
                         <DropdownMenu>
                           {featureDrop.map((item, i) => (
                               <DropdownItem value={item} key={i} onClick={this.onDropClick} >{item}</DropdownItem>
                            ))}
                         </DropdownMenu>
                       </Dropdown>
            </Col >

            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpenCampaign} toggle={()=>this.toggle('dropdownOpenCampaign')}>
                         <DropdownToggle caret>
                           Campaign
                         </DropdownToggle>
                         <DropdownMenu>
                           {featureDrop.map((item, i) => (
                               <DropdownItem value={item} key={i} onClick={this.onDropClick} >{item}</DropdownItem>
                            ))}
                         </DropdownMenu>
                       </Dropdown>
            </Col >
            <Col sm="2">
            <Dropdown isOpen={this.state.dropdownOpenDR} toggle={()=>this.toggle('dropdownOpenDR')}>
                         <DropdownToggle caret>
                           DR taken the action
                         </DropdownToggle>
                         <DropdownMenu>
                           {featureDrop.map((item, i) => (
                               <DropdownItem value={item} key={i} onClick={this.onDropClick} >{item}</DropdownItem>
                            ))}
                         </DropdownMenu>
                       </Dropdown>
            </Col >
            <Col sm="2">
                <DateRangePicker startDate="1/1/2014" endDate="3/1/2014">
                     <i className="cui-calendar icons font-4xl  mt-5"></i>
                </DateRangePicker>
            </Col>
          </Row>

        </CardBody>
        </Card>
        </Col>
        </Row  >
        <Row>
            <Col xs="12" sm="12" lg="22">
              <Card>
              <CardHeader>
                Manual VS. Auto Actions
                <div className="card-header-actions">
                </div>
              </CardHeader>
                <CardBody>
                  <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                    <Line data={mainChart} options={mainChartOpts} height={300} />
                  </div>
                </CardBody>
              </Card>
              </Col>
          </Row>
          <Row>
          <Col xs="25" sm="14" lg="22">
          <Card>
            <CardHeader>
              Manual Actions Reasons
              <div className="card-header-actions">
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
            </CardBody>
          </Card>
          <Button block color="dark" size="lg" className="btn-square" disabled>Export</Button>
        </Col>
          </Row>
      </div>
    );
  }
}

export default Graphs;
