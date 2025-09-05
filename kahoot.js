        
         const lati = 52.399550700000006

        const longt = 13.048066846939687

        const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longt}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`

            fetch(url2)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const resultado2 = data[0];

                    const oi = `${resultado2.generationtime_ms}`

                    console.log(oi)
                })