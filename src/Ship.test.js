const Ship = require('./Ship');
const Port = require('./Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
})

    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
expect(ship.currentPort).toBe(port);
    })
    it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
      
        expect(dover.ships).toContain(ship);
      });

    describe('Same Setup actions', () => {
       let calais;
       let dover;
        let itinerary;
        let ship;
        beforeEach(() => {  
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary); });
    it('can set sail', () => {
ship.setSail();
expect(ship.currentPort).toBeFalsy();
expect(ship.previousPort).toBe(dover);
expect(dover.ships).not.toContain(ship);
    });

    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();
      
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
      })
      it('can\'t sail further than its itinerary', () => {
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
    })
})