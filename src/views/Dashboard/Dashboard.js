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
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import axios from 'axios';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
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


const pie = {
  labels: [
    '% Auto Actions ',
    '% Manual Actions',
  ],
  datasets: [
    {
      data: [63, 37],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',

      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],
};


const pieGoogle = {
  labels: [
    '% Auto Actions ',
    '% Manual Actions',
  ],
  datasets: [
    {
      data: [67, 33],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',

      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],
};

const pieFacbook = {
  labels: [
    '% Auto Actions ',
    '% Manual Actions',
  ],
  datasets: [
    {
      data: [59, 41],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',

      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
      ],
    }],
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

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
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
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
          max: 250,
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


const bar = {
  labels: ['FB ad creation', 'Google ads creation', 'FB budget changes', 'CC budget changes'],
  datasets: [
    {
      label: 'Manual Charts Ratio',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,1)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [53,75,78,64],
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

const featureDropFeature = ['Shimi', 'David']
const featureDrop = ['Shimi', 'David']

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      dropdownOpenFeature: false,
      dropdownOpenProvider:false,
      dropdownOpenAccount:false,
      dropdownOpenCampaign:false,
      dropdownOpenDR:false
    };
  }

  componentDidMount() {
  axios.get(`http://bnb.data.bl.uk/doc/resource/007446989.json`)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })
  }


    toggle(dropDownName) {
      this.setState({
        [dropDownName]: !this.state[dropDownName],
      });
    }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
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
                <DateRangePicker startDate="1/8/2018" endDate="10/8/2014">
                     <i className="cui-calendar icons font-4xl  mt-5"></i>
                </DateRangePicker>
            </Col>
          </Row>

        </CardBody>
        </Card>
        </Col>
        </Row  >


        <Row>
          <Col xs="6" sm="10" lg="6">
            <div className="brand-card">
              <div className="brand-card-header bg-twitter">
                <i className="fa">Albert</i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">1061</div>
                  <div className="text-uppercase text-muted small">Automated Actions</div>
                </div>
                <div>
                  <div className="text-value">612</div>
                  <div className="text-uppercase text-muted small">Manual Actions</div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <div className="brand-card">
              <div className="brand-card-header bg-facebook">
                <i className="cui-social-facebook icons font-4xl d-block mt-2"></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">455</div>
                  <div className="text-uppercase text-muted small">Automated Actions</div>
                </div>
                <div>
                  <div className="text-value">320</div>
                  <div className="text-uppercase text-muted small">Manual Actions</div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <div className="brand-card">
              <div className="brand-card-header bg-google-plus">
                <i className="fa fa-google-plus"></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">606</div>
                  <div className="text-uppercase text-muted small">Automated Actions</div>
                </div>
                <div>
                  <div className="text-value">292</div>
                  <div className="text-uppercase text-muted small">Manual Actions</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="18" sm="8" lg="4">
            <Card>
              <CardHeader>
                Google
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pieGoogle} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="18" sm="8" lg="4">
            <Card>
              <CardHeader>
                Albert
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pie} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="18" sm="8" lg="4">
            <Card>
              <CardHeader>
                Facbook
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pieFacbook} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
              <Col xs="9" sm="12" lg="15" md="12" >
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
            </Col>
          </Row>

      </div>
    );
  }
}

export default Dashboard;
