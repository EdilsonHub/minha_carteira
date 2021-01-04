const formatData = (date: string): string => {
    return (new Date(date)).toLocaleString(
        'pt-br', 
        {   
            timeZone: 'UTC',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    )
}
 export default formatData;