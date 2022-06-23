from Client_API.client import API

if __name__ == "__main__":

    url = 'http://localhost:6000/music'
    api = API(url)

    data0 = {
        "name": "I Wanna Rave",
        "band": "Steve Aoki"
    }

    data1 = {
        "name": "Dr.Who",
        "band": "Swedish House Mafia"
    }

    update = {
        "name": "Spaceman",
        "band": "Hardwell"
    }

    delete = {"band": "Swedish House Mafia"}

    api.get()
    api.post(data0)
    api.post(data1)
    api.get()
    api.put(update)
    api.get()
    api.delete(delete)
    api.get()
    