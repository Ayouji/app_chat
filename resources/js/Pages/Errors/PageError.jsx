import { Head } from "@inertiajs/react";
import '../../../css/ErrorStyle.css';
function PageError({status}) {
        const title = {
          503: '503: Service Unavailable',
          500: '500: Server Error',
          404: '404 PAGE NOT FOUND !',
          403: '403: Forbidden',
        }[status]
      
        const description = {
          503: 'Sorry, we are doing some maintenance. Please check back soon.',
          500: 'Whoops, something went wrong on our servers.',
          404: 'Sorry, the page you are looking for could not be found.',
          403: 'Sorry, you are forbidden from accessing this page.',
        }[status]
      
        return (
        //   <div>
        //     <H1>{title}</H1>
        //     <div>{description}</div>
        <>
        <Head title={`${status}`} />
        
            <div
			className="error-page d-flex align-items-center flex-wrap justify-content-center pd-20 "
            // style={{background:'red'}}
		>
			<div className="pd-10">
				<div className="error-page-wrap text-center">
					<h1>{status}</h1>
					<h3>{title}</h3>
					<p>{description}</p>
					<div className="pt-20 mx-auto max-width-200">
						<a href={"http://localhost:8000/"} className="btn btn-primary btn-block btn-lg"
							>Back To Home</a>
						
					</div>
				</div>
			</div>
		</div>
        </>
        )
      
}

export default PageError;