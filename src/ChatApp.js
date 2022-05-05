import React from 'react'

import Avatar from './images/avatar.jpg';
import Image1 from './images/dog-image-1.jpg';
import Image2 from './images/dog-image-2.jpg';
import Image3 from './images/dog-image-3.jpg';

export const ChatApp = () => {
    return (
        <div className="container">
          <div className="nft__phone">
              <div className="nft__phone-header">
                <div class="nft__phone-header-camera"></div>
                <div className="nft__phone-header-description">
                    <div className="nft__phone-header-left">

                        <i className="nft__uil-ellipsis-v"></i>
                        <img src={Avatar} alt="avatar"></img>

                        <div className="nft__profile-name">
                            <p className='nft__name'>Samuel Green</p>
                            <p className='nft__availability'>Avaliable to Walk</p>
                        </div>
                    </div>

                    <i className="nft__uil uil-ellipsis-v"></i>
                </div>
              </div>
      <div class="nft__phone-body">
        <div class="nft__message left">
          <p>
            That sounds great, I'd be <br />
            happy to discuss more.
          </p>
        </div>
        <div class="nft__message left">
          <p>
            Could you send over some <br />
            pictures of your dog please
          </p>
        </div>
        <div class="nft__pictures">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div class="nft__message right">
          <p>
            Here are a few pictures. She's <br />
            a happy girl!
          </p>
        </div>
        <div class="nft__message right">
          <p>Can you make it?</p>
        </div>
        <div class="nft__message left">
          <p>
            She looks so happy! The time <br />
            we discussed works. How <br />
            long shall I take her out for?
          </p>
        </div>
        <div class="nft__payment">
          <div class="nft__payment-left">
            <i class="nft__uil uil-circle"></i>
            <p>30 minute walk</p>
          </div>

          <p class="nft__amount">$29</p>
        </div>
        <div class="nft__payment">
          <div class="nft__payment-left">
            <i class="nft__uil uil-circle"></i>
            <p>1 hour walk</p>
          </div>
          <p class="nft__amount">$49</p>
        </div>
        <div class="nft__type-message">
          <p>Type a message...</p>
          <div class="nft__send">
            <i class="nft__uil uil-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="nft__description">
      <h1 class="nft__description-head">Simple booking</h1>
      <p class="nft__description-text">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </div>
    <div class="nft__purpleBody"></div>
    <div class="nft__greybody"></div>
    </div>
    )
}
