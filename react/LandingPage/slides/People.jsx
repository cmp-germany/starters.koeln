import React              from 'react';
import PeopleCardModule   from '../modules/PeopleCardModule';
import RegisterCardModule from '../modules/RegisterCardModule';

var People = React.createClass({
  render: function() {

    var data = this.props.data;

    var peopleCards = data.cards.map(function(card, index) {
      switch (card.type) {

        case "people":
          return <PeopleCardModule data={card} key={index} />;

        case "register":
          return <RegisterCardModule data={card} key={index} />;

        default:
          console.error('Unknown People Card Type: \''+card.type+'\'. Card Data:');
          console.error(card);

      }
    });
    return (
      <section className="slide slide--people">
        <div className="container">
          <div className="row">
            {peopleCards}
          </div>
        </div>
      </section>
    );
  }
})

export default People;
