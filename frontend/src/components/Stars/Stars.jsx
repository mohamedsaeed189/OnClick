import React from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Stars.scss'

export default function Stars({value}) {
  return (
    <div className='stars'>
        {
            value===0&&<div>
                <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value===1&& <div>
                <StarIcon className='icon' /> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value===2&& <div>
                <StarIcon className='icon' /> <StarIcon className='icon' /> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value===3&& <div>
                <StarIcon className='icon' /> <StarIcon className='icon' /> <StarIcon className='icon' />  <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value===4&& <div>
                <StarIcon className='icon' /> <StarIcon className='icon' /> <StarIcon className='icon'  /> <StarIcon className='icon' /> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value===5&& <div>
                <StarIcon  className='icon'/> <StarIcon className='icon' /> <StarIcon className='icon' /> <StarIcon className='icon' /> <StarIcon className='icon' />
            </div>
        }
        {
            value>0&&value<1&& <div>
                <StarHalfIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value>1&&value<2&& <div>
               <StarIcon  className='icon'/> <StarHalfIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value>2&&value<3&& <div>
                <StarIcon  className='icon'/> <StarIcon  className='icon'/> <StarHalfIcon className='icon'/> <StarBorderIcon className='icon'/> <StarBorderIcon className='icon'/>
            </div>
        }
        {
            value>3&&value<4&& <div>
                <StarIcon  className='icon'/><StarIcon  className='icon'/><StarIcon  className='icon'/><StarHalfIcon className='icon'/><StarBorderIcon className='icon'/>
            </div>
        }
        {
            value>4&&value<5&& <div>
                <StarIcon  className='icon'/><StarIcon  className='icon'/><StarIcon  className='icon'/><StarIcon  className='icon'/><StarHalfIcon className='icon'/>
            </div>
        }
        

    </div>
  )
}
