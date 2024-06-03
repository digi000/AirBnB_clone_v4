#!/usr/bin/python3
"""
 Fetch places
"""
from flask import Flask, render_template
import uuid

from models import storage
from models.state import State
from models.city import City
from models.amenity import Amenity
from models.place import Place

app = Flask(__name__)

@app.route('/100-hbnb')
def hbnb():
    """
    HBNB is alive!
    """
    states = storage.all(State).values()
    states = sorted(states, key=lambda k: k.name)
    st_ct = []

    for state in states:
        st_ct.append([state, sorted(state.cities, key=lambda k: k.name)])

    amenities = storage.all(Amenity).values()
    amenities = sorted(amenities, key=lambda k: k.name)

    places = storage.all(Place).values()
    places = sorted(places, key=lambda k: k.name)

    

    return render_template('100-hbnb.html',
                           cache_id=uuid.uuid4(),
                           states=st_ct,
                           amenities=amenities,
                           places=places)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)