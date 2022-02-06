from flask import Flask
import folium

app = Flask(__name__)

@app.route('/')
def home():
    map = folium.Map(
        location=[44.79263443717962, -0.5393100163411968],
        zoom_start=10,
    )
    folium.Marker(
        location=[44.79263443717962, -0.5393100163411968],
        popup='<b>Click !</b>',
        tooltip="Here"
    ).add_to(map)

    return map._repr_html_()


if __name__ == "__main__":
    app.run(debug=True)

