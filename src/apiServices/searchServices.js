import * as request from '~/utils/request'

export const search = async (q, type = 'less') => {
    try {
        const response = await request.get('users/search', {
            params: {
                q,
                type
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
} 