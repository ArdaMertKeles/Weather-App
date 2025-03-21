import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"

export const Map = ({ lat, lon, isDark, currentData }) => {

    if (currentData.length === 0) return null;

    const api_key = process.env.REACT_APP_STADIA_API_KEY

    const customIcon = new Icon({
        iconUrl: require('.././assets/location-pin.png'),
        iconSize: [32, 32]
    })

    return <MapContainer center={[lat, lon]} zoom={13}>
        <TileLayer attribution={isDark ? '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' : ''}
            url={isDark ? `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${api_key}` : `https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${api_key}`} />
        <Marker position={[lat, lon]} icon={customIcon}>
            <Popup>
                {currentData.name}
            </Popup>
        </Marker>
    </MapContainer>
}