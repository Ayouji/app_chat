
import '@/template/jquery.fancybox'
import '../../../../../css/jquery.fancybox.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context_Data } from '@/CreatContexts';
import { useContext } from 'react';
function Media({messageAll}) {
    const {Path_Asset}=useContext(Context_Data)

    return ( <>
    <div class="tab-pane fade" id="offcanvas-group-tab-media" role="tabpanel">
                            <div class="row row-cols-3 g-3 py-6">
                            
                                {messageAll.map((itms,i)=>
                                {
                                    if (itms.status_Message==="image" || itms.status_Message==="video") {
                                        let src = null
                                        if (itms.is_Locale) {
              
                                            src = `${itms.message}`
                                            }
                                            else{
                                             src =`${Path_Asset}storage/${itms.message}`
                                        }
                                    
                                    return (
                                    <div class="col" key={i}>    
                                    {itms.status_Message==="image"?
                                    <a href={src} 
                                    data-fancybox="image" 
                                    >
                                        
                                    <LazyLoadImage
									alt={"alt"+src}
									effect="blur"
									src={src} 
                                    class="img-fluid rounded"
									/>
                                    </a>:
                                    <video
                                    className="w-100 h-100"
                                        poster={`${Path_Asset}storage/GIF/B-CHAT.gif`}
                                        controls
                                        crossorigin
                                    >
                                        <source
                                            src={src}
                                            type="video/mp4"
                                        />
                                    </video>}
                                    
                                </div>
                                )
                                }
                            })}



                            </div>
                        </div>
    </> );
}

export default Media;