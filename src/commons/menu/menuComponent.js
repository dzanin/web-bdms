import React from 'react';
import { connect } from 'react-redux';
// import {
//   Link
// } from "react-router-dom";
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import _ from 'lodash';

import {
  // Divider,
  List,
  Icon,
  Dropdown,
  Popup,
  // Button
} from 'semantic-ui-react';
// import LabelReset from '../form/labelReset';

class MenuComponent extends React.Component {
  render() {
    const {
      i18n, handleModeChange, mode
    } = this.props;

    return (
      <div
        style={{
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.17) 0px 4px 12px',
          display: 'flex',
          flexDirection: 'row',
          height: '5em',
          padding: '0px 1em',
          zIndex: 10
        }}
      >
        <img
          alt='ch logo'
          src={process.env.PUBLIC_URL + '/img/ch.png'}
          style={{
            height: '30px',
            width: 'auto'
          }}
        />
        <div
          style={{
            marginLeft: '1em'
          }}
        >
          <div>
            Borehole Management System
          </div>
          <div
            style={{
              color: '#787878',
              fontSize: '0.8em'
            }}
          >
            {
              (() => {
                switch (mode) {
                  case 'viewer':
                    return (
                      <span
                        style={{color: '#ed1d24'}}
                      >
                        <Icon name='binoculars' /> Explorer mode
                      </span>
                    )
                  case 'editor':
                    return (
                      <span
                        style={{color: '#ed1d24'}}
                      >
                        <Icon name='edit' />
                        Editor Mode
                      </span>
                    )
                  case 'setting':
                    return (
                      <span
                        style={{color: '#ed1d24'}}
                      >
                        <Icon name='setting' /> Settings
                      </span>
                    )

                  default:
                    break;
                }
              })()
            }
          </div>
        </div>
        <div
          style={{
            flex: 1
          }}
        />
        <Popup
          trigger={
            <Icon
              size='big'
              name='th'
              style={{
                cursor: 'pointer'
              }}
            />
          }
          on='click'
          position='bottom right'
        >
          <div
            style={{
              minWidth: '200px'
            }}
          >
            {
              this.props.user.data !== null?
                <div
                  style={{
                    padding: '0.5em',
                    display: 'flex',
                    flexDirection: 'row'
                  }}
                >
                  <div>
                    <div>
                      {this.props.user.data.name}
                    </div>
                    <div
                      style={{
                        color: '#787878',
                        fontSize: '0.8em'
                      }}
                    >
                      {this.props.user.data.username}
                    </div>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      textAlign: 'right'
                    }}
                  >
                    {/* <Button
                      size='tiny'
                      primary
                    >
                      Logout
                    </Button> */}
                  </div>

                </div>: ''
            }
            <List
              divided
              relaxed
              selection
              style={{
                marginTop: '0px'
              }}
            >
              <List.Item
                onClick={()=>{
                  if (_.isFunction(handleModeChange)) {
                    handleModeChange('viewer');
                  }
                }}
                style={{
                  padding: '0.5em',
                  // borderLeft: mode !== 'viewer'?
                  //   '0.5em solid rgb(237, 29, 36)': null
                }}
              >
                <List.Icon
                  name='binoculars'
                  verticalAlign='middle'
                />
                <List.Content>
                  <List.Header as='h4'>
                    Viewer mode  
                  </List.Header>
                  <List.Description>
                    Search and display
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item
                onClick={()=>{
                  if (_.isFunction(handleModeChange)) {
                    handleModeChange('editor');
                  }
                }}
                style={{
                  padding: '0.5em',
                  // borderLeft: mode !== 'editor'?
                  //   '0.5em solid rgb(237, 29, 36)': null
                }}
              >
                <List.Icon
                  name='edit'
                  verticalAlign='middle'
                />
                <List.Content>
                  <List.Header as='h4'>
                    Editor mode  
                  </List.Header>
                  <List.Description>
                    Create and modify
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item
                onClick={()=>{
                  if (_.isFunction(handleModeChange)) {
                    handleModeChange('setting/explorer');
                  }
                }}
                style={{
                  padding: '0.5em',
                  // borderLeft: mode !== 'editor'?
                  //   '0.5em solid rgb(237, 29, 36)': null
                }}
              >
                <List.Icon
                  name='cog'
                  verticalAlign='middle'
                />
                <List.Content>
                  <List.Header as='h4'>
                    Settings
                  </List.Header>
                  <List.Description>
                    Update your preferences
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
            <div
              style={{
                fontSize: '0.9em',
                textAlign: 'center'
              }}
            >
              <span
                className='link'
                onClick={()=>{
                  i18n.changeLanguage('de');
                }}
                style={{
                  paddingRight: '0.5em',
                  color: i18n.language === 'de'?
                    '#ed1d24': null,
                  textDecoration: i18n.language === 'de'?
                    'underline': null
                }}
              >
                DE
              </span>
              <span
                className='link'
                onClick={()=>{
                  i18n.changeLanguage('fr');
                }}
                style={{
                  paddingRight: '0.5em' ,
                  color: i18n.language === 'fr'?
                    '#ed1d24': null,
                  textDecoration: i18n.language === 'fr'?
                    'underline': null
                }}
              >
                FR
              </span>
              <span
                className='link'
                onClick={()=>{
                  i18n.changeLanguage('it');
                }}
                style={{
                  paddingRight: '0.5em' ,
                  color: i18n.language === 'it'?
                    '#ed1d24': null,
                  textDecoration: i18n.language === 'it'?
                    'underline': null
                }}
              >
                IT
              </span>
              <span
                className='link'
                onClick={()=>{
                  i18n.changeLanguage('en');
                }}
                style={{
                  color: i18n.language === 'en'?
                    '#ed1d24': null,
                  textDecoration: i18n.language === 'en'?
                    'underline': null
                }}
              >
                EN
              </span>
            </div>
          </div>
        </Popup>
      </div>
    );
  }

  _render() {
    const {
      i18n, t, handleModeChange, mode
    } = this.props;
    return (
      <div style={{
        flex: '1 1 0%',
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
      }}>
        <List
          divided
          verticalAlign='middle'
          style={{
            margin: '0px'
          }}
        >
          <List.Item
            style={{
              padding: '1em',
              backgroundColor: mode === 'editor' ? 'rgb(220, 0, 24)' : 'black',
              color: 'white'
            }}>
            {
              this.props.user.data !== null
                && this.props.user.data.roles.indexOf('producer') >= 0 ?
                <List.Content floated='right'>
                  <Dropdown trigger={
                    <span
                      style={{
                        color: 'white'
                      }}
                    >
                      change
                    </span>
                  } options={(() => {
                    let opts = [];
                    if (mode !== 'viewer') {
                      opts.push({
                        key: 'viewer',
                        text: 'Exporer Mode',
                        icon: 'binoculars',
                        onClick: () => {
                          if (_.isFunction(handleModeChange)) {
                            handleModeChange('viewer');
                          }
                        }
                      });
                    }
                    if (mode !== 'editor') {
                      opts.push({
                        key: 'editor',
                        text: 'Editor Mode',
                        icon: 'edit',
                        onClick: () => {
                          if (_.isFunction(handleModeChange)) {
                            handleModeChange('editor');
                          }
                        }
                      });
                    }
                    return opts;
                  })()} />
                </List.Content> : null
            }
            {
              (() => {
                switch (mode) {
                  case 'viewer':
                    return (
                      <List.Content>
                        <Icon name='binoculars' />
                        Explorer mode
                        <br />
                        <span
                          style={{
                            fontSize: '0.7em'
                          }}
                        >
                          {
                            this.props.user.data !== null ?
                              this.props.user.data.name : ''
                          }
                          {
                            // this.props.user.data === null?
                            //   null:
                            //   <span>
                            //     &nbsp; ({
                            //       this.props.user.data.username === 'anonymous'?
                            //         <Link
                            //           style={{
                            //             color: 'white'
                            //           }}
                            //           to="/login"
                            //         >
                            //           login
                            //         </Link>:
                            //         <Link
                            //           style={{
                            //             color: 'white'
                            //           }}
                            //           to="/login"
                            //         >
                            //           logout
                            //         </Link>
                            //     })
                            //   </span>
                          }
                        </span>
                      </List.Content>
                    )
                  case 'editor':
                    return (
                      <List.Content>
                        <Icon name='edit' />
                        Editor Mode
                      </List.Content>
                    )
                  case 'setting':
                    return (
                      <List.Content>
                        <Icon name='setting' />
                        Settings
                      </List.Content>
                    )

                  default:
                    break;
                }
              })()
            }
          </List.Item>
        </List>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
        >
          {this.props.children}
        </div>
        <List
          divided
          verticalAlign='middle'
        >
          <List.Item
            style={{
              padding: '1em',
              backgroundColor: '#dedede',
              // color: 'white'
            }}>
            <List.Content floated='right'>
              <Dropdown
                trigger={
                  <span>
                    {t('header:language')} ({i18n.language})
                    </span>
                }
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      i18n.changeLanguage('en');
                    }}
                    selected={
                      i18n.language === 'en'
                    }
                  >
                    English
                    </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      i18n.changeLanguage('de');
                    }}
                    selected={
                      i18n.language === 'de'
                    }
                  >
                    Deutsch
                    </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      i18n.changeLanguage('fr');
                    }}
                    selected={
                      i18n.language === 'fr'
                    }
                  >
                    Français
                    </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      i18n.changeLanguage('it');
                    }}
                    selected={
                      i18n.language === 'it'
                    }
                  >
                    Italiano
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </List.Content>
            {
              this.props.user.data !== null
                && this.props.user.data.roles.indexOf('producer') >= 0 ?
                <List.Content
                  as='a'
                  onClick={(e) => {
                    e.stopPropagation();
                    if (_.isFunction(handleModeChange)) {
                      handleModeChange('setting/explorer');
                    }
                  }}
                >
                  <Icon name='setting' />
                  Settings
                </List.Content> : null
            }
          </List.Item>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.core_user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch
  }
}

MenuComponent.propTypes = {
  handleModeChange: PropTypes.func,
  mode: PropTypes.string
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translate(['common', 'header', 'borehole_form'])(MenuComponent));

// export default translate(['common', 'header'])(MenuComponent);
