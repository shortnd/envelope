import React from 'react';
import ReactDOM from 'react-dom';
import PropsType from 'prop-types';

import './index.css'

function AddressLabel({ person }) {
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.address}</div>
      <div>{person.city} {person.zip}</div>
    </div>
  )
}

AddressLabel.propsType = {
  person: PropsType.shape({
    name: PropsType.string,
    address: PropsType.string,
    city: PropsType.string,
    zip: PropsType.zip
  })
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <article className="envelope">
      <div className="envelope__top">
        <AddressLabel person={fromPerson} />
        <section className="envelope__top-stamp">
          <span>STAMP</span>
        </section>
      </div>
      <div className="envelope__body">
        <AddressLabel person={toPerson} />
      </div>
    </article>
  )
}

const fromPerson = {
  name: 'Mr. Sender',
  address: '123 Fake St.',
  city: 'Boston, MA',
  zip: '02118'
}

const toPerson = {
  name: 'Mr Receiver',
  address: '123 Fake St.',
  city: 'San Francisco, CA',
  zip: '94101'
}

ReactDOM.render(<Envelope toPerson={toPerson} fromPerson={fromPerson} />, document.querySelector('#root'));
