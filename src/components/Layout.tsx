import React from 'react'
import Navigation from './partial/Navigation'
import { icp } from '../appSettings.json'
import { Container } from 'react-bootstrap'
import locale from '../locales/LocaleImports'

export default class Layout extends React.PureComponent {
  render () {
    return <>
      <header>
        <Navigation />
      </header>
      <Container fluid as='main' className='pt-3'>
        {this.props.children}
      </Container>
      <hr />
      <Container fluid as='footer'>
        <img alt='TMDb logo' style={{width: 70}} src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg' />
        <p className='text-muted'>{locale.attribution}</p>
        <p className='text-muted'>{icp}</p>
      </Container>
    </>
  }
}
