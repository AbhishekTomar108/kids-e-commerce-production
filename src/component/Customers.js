import React, { useState , useEffect} from 'react'
import star from '../images/blue-star.png'
import productImg1 from '../images/product-img-1.png'
import leftArrow from '../images/left-arrow.png'
import rightArrow from '../images/right-arrow.png'

const Customers = () => {
    const [currentposition, setcurrentposition] = useState(3);
    const [currentWidth, setcurrentWidth] = useState(0);
    const [intervalStatus, setIntervalStatus] = useState(true);


    React.useEffect(()=>{

        const customCard = document.getElementsByClassName('custom-card');
        const totalItem = customCard.length;
        const reviewCard = document.getElementsByClassName('review-cards')[0];

        let position = 3;
        let movingWidth = 0;
        let timer = null;

        if(intervalStatus){
         timer = window.setInterval(()=>{

             
        if(position<totalItem){
            
            if(document.documentElement.clientWidth>900)
            {
           
            movingWidth = movingWidth+100;
            reviewCard.style.transform = `translateX(-${movingWidth}%)`
            
             position = position+3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
            }

            else if(document.documentElement.clientWidth<=900)
            {
            movingWidth = movingWidth+75;
            reviewCard.style.transform = `translateX(-${movingWidth}vw)`
            
             position = position+3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
            }
        }
        else{
            
             movingWidth = 0;
            reviewCard.style.transform = `translateX(${movingWidth}%)`
            
             position = 3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
        }
        },2000)
    }
    else{
        window.clearInterval(timer);
    }

        return ()=>window.clearInterval(timer);
    },[intervalStatus])


    const autoScrollCard = ()=>{       
       
        const customCard = document.getElementsByClassName('custom-card');
        const totalItem = customCard.length;
        const reviewCard = document.getElementsByClassName('review-cards')[0];

        let position = 3;
        let movingWidth = 0;

        window.setInterval(()=>{

             
        if(position<totalItem){

            if(document.documentElement.clientWidth>900)
            {
           
            movingWidth = movingWidth+100;
            reviewCard.style.transform = `translateX(-${movingWidth}%)`
            
             position = position+3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
            }

            else if(document.documentElement.clientWidth<=900)
            {
              
            movingWidth = movingWidth+75;
            reviewCard.style.transform = `translateX(-${movingWidth}vw)`
            
             position = position+3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
            }
        }
        else{
            
             movingWidth = 0;
            reviewCard.style.transform = `translateX(${movingWidth}%)`
            
             position = 3;
            setcurrentposition(position)
            setcurrentWidth(movingWidth)
        }
        },2000)
    }

    const moveReviewCardRight = ()=>{
        
        const customCard = document.getElementsByClassName('custom-card');
        const totalItem = customCard.length;
        const reviewCard = document.getElementsByClassName('review-cards')[0];

        
        if(currentposition<totalItem){

          
            const moveWidth = currentWidth+100;
            reviewCard.style.transform = `translateX(-${moveWidth}%)`
            
            const addposition = currentposition+3;
            setcurrentposition(addposition)
            setcurrentWidth(moveWidth)
        }
        else{
            
            const moveWidth = 0;
            reviewCard.style.transform = `translateX(${moveWidth}%)`
            
            const addposition = 3;
            setcurrentposition(addposition)
            setcurrentWidth(moveWidth)
        }

        
    }

    const moveReviewCardLeft = ()=>{

        const customCard = document.getElementsByClassName('custom-card');
        const totalItem = customCard.length;
        const reviewCard = document.getElementsByClassName('review-cards')[0];

        
        
        if(currentposition>3){

            const moveWidth = currentWidth-100;
            reviewCard.style.transform = `translateX(-${moveWidth}%)`
            
            const addposition = currentposition-3;
            setcurrentposition(addposition)
            setcurrentWidth(moveWidth)
        }
        else{
            
            const moveWidth =( (totalItem/3)*100)-100;
            reviewCard.style.transform = `translateX(-${moveWidth}%)`
            
            const addposition = totalItem;
            setcurrentposition(addposition)
            setcurrentWidth(moveWidth)
        }
    }
  return (
    <div>
        <div className='customer-review-container'>
            <h2>Let customers speak for us</h2>
            <div className='total-review'>
            <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-text'>
                                    From 2176 reviews
                                </div>
            </div>

            <div className='review-card-container'>

                <div className='review-cards'>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                                <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                                <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                                <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                                <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                    <div className='custom-card'>
                    <div className='star-group'>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                                </div> 
                                <div className='review-content'>
                                <span className='review-title'>Amazing Product</span>
                                <span>MY CHILD LOVED IT</span>
                                </div>

                            <div className='review-person'>
                                <span>Vishaka Singh</span>
                                <span>23/04/2021</span>
                            </div>

                            <div className='product-details'>
                            <div className='product-image'>
                                <img  src={productImg1}/>
                                </div>
                                <span>Crochet Sensory Cube for Babies</span>
                            </div>
                    </div>
                </div>

                <div className='arrow-container'>
                    <div className='left-arrow arrow-img' onClick={()=>{moveReviewCardLeft();setIntervalStatus(false)}}>
                        <img src={leftArrow}/>
                    </div>
                    <div className='right-arrow arrow-img' onClick={()=>{moveReviewCardRight();setIntervalStatus(false)}}>
                        <img src={rightArrow}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers