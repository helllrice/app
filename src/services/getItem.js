import axios from 'axios';

export const getItem = async () => {
    const URL = 'https://pickcase.ua/bitrix/services/main/ajax.php?action=generator&model=iphone-x&page=2&c=diva:rest&mode=ajax&lang=ru?action=generator&model=iphone-x&c=diva:rest&mode=ajax&lang=ru';
    
    try {
        let response = await axios.get(URL);
        return response.data.data
    } catch (error) {
        Notification.error({
            message: 'Error',
            description: 'getItems service error!'
        });
        console.error(error);
    }
}