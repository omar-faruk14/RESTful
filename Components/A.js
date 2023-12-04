const kintoneClient = require('../x/conn');
const client=require('../x/conn2');
const client2=require('../x/conn3');
const fetch = require("node-fetch");

const set_k = (req, res) => {
    kintoneClient.record
        .getRecords({ app: "1" })
        .then((resp) => {
            const records = resp.records.map(record => {
                return {
                    id: record.id.value,
                    name: record.name.value,
                    date: record.date.value,
                    location: record.location.value,
                    details: record.details.value,
                    locations_id: record.locations_id.value,
                };
            });
            records.sort((a, b) => parseInt(a.id) - parseInt(b.id));

            res.json(records);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving records' });
        });
}


const set_facilities = (req, res) => {
    client.record
        .getRecords({ app: "3" })
        .then((resp) => {
            const records = resp.records.map(record => {
                return {
                    id: record.id.value,
                    Facilities_title: record.Facilities_title.value,
                    Facilities_descriptions: record.Facilities_descriptions.value,
                    Facilities_image: record.Facilities_image.value,
                    Facilities_image_url: `https://kybkt9gzqkzo.cybozu.com/k/v1/file.json?fileKey=${record.Facilities_image.value[0].fileKey}`,
                    event_id: record.event_id.value,
                };

        
            });
            records.sort((a, b) => parseInt(a.id) - parseInt(b.id));

            res.json(records);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving records' });
        });
}




const set_map = (req, res) => {
    client2.record
        .getRecords({ app: "2" })
        .then((resp) => {
            const records = resp.records.map(record => {
                return {
                    id: record.id.value,
                    lat: record.lat.value,
                    lon: record.lon.value,
                    title: record.title.value,
                    description: record.description.value,
                    group: record.group.value


                };
            });
            records.sort((a, b) => parseInt(a.id) - parseInt(b.id));

            res.json(records);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Error retrieving records' });
        });
}

const image_r=async (req, res) => {
    const { fileKey } = req.params;
    const kintoneImageURL = `https://kybkt9gzqkzo.cybozu.com/k/v1/file.json?fileKey=${fileKey}`;
    const headers = {
        'X-Cybozu-API-Token': 'OLUdDMd16xyF7Hb35YBU0gxctdnMQR671fkcJj75'
    };

    try {
        const kintoneResponse = await fetch(kintoneImageURL, { headers });

        if (!kintoneResponse.ok) {
            throw new Error(`Failed to fetch image. Status: ${kintoneResponse.status}`);
        }

        const imageBuffer = await kintoneResponse.buffer();
        res.writeHead(200, { 'Content-Type': 'image' });
        res.end(imageBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch image', specificError: error.message });
    }
}


module.exports = {
    set_k,
    set_facilities,
    set_map,
    image_r,
    
};