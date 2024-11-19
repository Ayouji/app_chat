import SVG_IMAGE from "../../SVG/SVG_IMAGE";
import '@/template/plyr'
import '@/template/jquery.fancybox'
import '../../../../../css/jquery.fancybox.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import formatFileSize from "../../formatFileSize";
/**
 * 
 * 
 * @returns Images message
 * 
 * 
 */

function MsgImage({src,srcOrgFil}) {
    return ( 
    <>
    <div class="row gx-3">
                        <div class="col">
                            {/* <LazyLoadImage src={`${Path_Asset}storage/${datamessage.message}`}
									width={600} height={400}
									className="img-fluid rounded"
									alt="Image Alt"
								/> */}
        <div className="da-card box-shadow">
									<div className="da-card-photo">
										{/* <img src={src} alt=""/> */}
										<LazyLoadImage
									alt={"alt"+srcOrgFil}
									effect="blur"
									src={src} 
									/>
										<div className="da-overlay">
											<div className="da-social">
												<h5 className="mb-10 color-white pd-20">
													{srcOrgFil}
												</h5>
												<ul style={{listStyleType: 'none'}}>
													<li>
														<a
															href={src}

															data-fancybox="images"
                                                            
															>
                                                                    <SVG_IMAGE/>
                                                            </a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
                        </div>
                </div>
    </> 
    );
}

/**
 * 
 * 
 * @returns Video message
 * 
 * 
 */
function MsgVideo({srcVideo,Path_Asset}) {
	return ( 
		<div >
			<video
			className="w-100 h-100"
				// poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
				poster={`${Path_Asset}storage/GIF/B-CHAT.gif`}
				controls
				crossorigin
			>
				<source
					src={srcVideo}
					type="video/mp4"
				/>
			</video>
	</div>
);
}

/**
 * 
 * 
 * @returns Video message
 * 
 * 
 */
function MsgAudio({srcAudio}) {
	return ( 
		<div class="pd-20 card-box mb-30">
						
							<audio controls>
									<source
										src={srcAudio}
										type="audio/webm"
									/>
							</audio>
					</div>
);
}

/**
 * 
 * 
 * @returns Documment message
 * 
 * 
 */

function MsgDocument({srcDoc,srcOrgFil,srcSizeFil,etat=null}){
	return <div className="row align-items-center gx-4">
	<div className="col-auto">
		<a href={srcDoc} className="avatar avatar-sm" download={srcOrgFil}>
			<div className="avatar-text bg-white text-primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
				viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
				strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
			</div>
		</a>
	</div>
	<div className="col overflow-hidden">
		<h6 className="text-truncate text-reset">
			<a href="#" className="text-reset">{srcOrgFil ?srcOrgFil:'null'}</a>
		</h6>
		<ul className="list-inline text-uppercase extra-small opacity-75 mb-0">
			<li className="list-inline-item">{formatFileSize(srcSizeFil)}</li>
		</ul>
	</div>
</div>
}



export {MsgDocument,MsgVideo , MsgAudio } ;

export default MsgImage;