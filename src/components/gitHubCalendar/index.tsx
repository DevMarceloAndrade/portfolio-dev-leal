import GitHubCalendar from 'react-github-calendar';



const GitHubContributions = () => {
    return (
        <div  className='flex max-w-full'>
            <GitHubCalendar blockSize={5} 
                labels={
                    {
                        legend:{
                            less: '',
                            more: ''
                        },
                        months:[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                        totalCount:' '
                    }
                }
                username="Ellucidator"
                
            />
        </div>
    );
};

export default GitHubContributions;