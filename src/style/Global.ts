import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: HVD_Comic_Serif_Pro;
  src: url(./fonts/HVD_Comic_Serif_Pro.otf);
}
@font-face {
  font-family: Sofia_Pro_Regular;
  src: url(./fonts/Sofia_Pro_Regular.otf);
}
@font-face {
  font-family: Sofia_Pro_Semi_Bold;
  src: url(./fonts/Sofia_Pro_Semi_Bold.otf);
}
* {
  font-family: Sofia_Pro_Regular;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .icon_sidebar
  {
    margin-right: 20px;
  }
.jpBRLF
{
  color: #848282;
font-weight: 700;
font-size: 16px;
}
#join-pool-button,#join-pool-button:hover
{
  border-radius:18px !important;
}
#swap-page button.htxlrH:hover,#join-pool-button:hover {
  background-color:#6e2d0a;
}
button div
{
  // color: rgb(144,150,152) !important;
  // color: rgb(144, 150, 152) !important;
  font-size: 16px !important;
font-weight: 600 !important;
line-height: 1.5 !important;
margin-right: 16px !important;
}
nav button {
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);
  background-color: #6e2d0a !important;
  border-radius:32px !important;
  color:#fff !important;
}
nav button:hover {
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

  background-color: #6e2d0a !important;
  border-radius:32px !important;
  color:#fff !important;
  opacity:0.8 !important;
}
nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
  background: transparent !important;

}

#pair:hover
{
  background-color:transparent !important;
}
.evXgBv .desktop-icon,.desktop-icon
{
  width:156px !important;
  // margin-top:10px;
}
#pool-nav-link,#swap-nav-link,button,a
{
  box-shadow: 0px 0px 0px 0px rgba(14,14,44,0.4) inset !important;
}
.div_padding
{
  border-bottom: 1px solid #E9EAEB;
padding: 24px;
}
.heading_pool
{
  font-size: 20px;
  font-weight: 600;
line-height: 1.1;
margin-bottom:5px !important;
}
.desc_pool
{
 
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-weight: 700;
}
nav div[title="Bunny"]
{
  display:none;
}
.menulink div
{
  font-size:16px !important;
  // color:#848282 !important;
  text-transform:capitalize;
  font-weight: 700;
  font-family: Sofia_Pro_Semi_Bold !important;
}
div[role="button"] a {
  // text-transform: uppercase;
  font-size: 15px;
  font-family: Sofia_Pro_Semi_Bold !important;
}
.menulink img
{
  max-width:18px !important;
  min-width:18px !important;
}
.menulink svg
{
  margin-right: 16px;
  height:20px;
}
nav button[aria-label="Toggle menu"] svg {
  fill: #6e2d0a !important;
}
#swap-page svg
{
  fill:#6e2d0a;
  color:#6e2d0a;
}
.bor_radius>div,.bor_radius a
{
  border-radius:32px;
}
.bor_radius div a
{
  // background-color:transparent;
}
.bor_radius div a:hover,.bor_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
{
  background-color: #6e2d0a !important;
  color:#fff !important;
  opacity:1 !important;
}
.bor_radius div a(:active),.bor_radius div a:active
{
  background-color: #6e2d0a !important;
  color:#fff !important;
}
.bor_radius div a:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled),
.bor_radius div a[variant="subtle"] {
  opacity: 1;
  background-color: #6e2d0a !important;
}
#swap-page button,#pool-page-button button,#join-pool-button
{
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);
  border: 1px solid #6e2d0a  !important;
  box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
  border-radius:18px !important;
}
#swap-page button:hover,#pool-page-button button:hover,#join-pool-button:hover
{
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);
  border: 1px solid #6e2d0a  !important;
  box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
  border-radius:18px !important;
  opacity:0.8;
}
#swap-page button[title="Settings"],
#swap-page button[title="Recent transactions"],
.btn_icon_center
{
  background:none !important;
  border:none !important;
}
.arrow_color_grey .open-currency-select-button svg,
#add-liquidity-input-tokena svg,#add-liquidity-input-tokenb svg
{
  color:#fff !important;
  fill: #fff !important;
}
#swap-currency-input,#swap-currency-input>div,
#swap-currency-output,#swap-currency-output>div,.radius_card,
#add-liquidity-input-tokena,#add-liquidity-input-tokena>div,
#add-liquidity-input-tokenb,#add-liquidity-input-tokenb>div
{
  border-radius:20px;
}
div[data-reach-dialog-overlay]
{
z-index:21 !important;
}
.card_bg_1
{
 border-radius:32px;

}
.btn_yellow
{
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

border: 1px solid #6e2d0a  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
color:#fff !important;
}
.btn_yellow:hover
{
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

border: 1px solid #6e2d0a  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
opacity:0.8;
}
// .slippage_btn
// {
//   background-color: #e9eaeb !important;
// }
#token-search-input
{
  border:1px solid #ccc;
}
button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
 {
 opacity:1 !important;
}
button:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
  opacity:0.8 !important;
}
.input_color button,#swap-button
{
  color:#fff !important;
}
button div#pair
{
margin-left:16px !important;
}
#swap-page .price_icon svg {
  fill: #11161c !important;
  color: #11161c !important;
}
#swap-page .price_icon svg:hover
{
  fill: #7782b8 !important;
  color: #7782b8 !important;
}
#swap-page button.open-currency-select-button, #pool-page-button .open-currency-select-button {
  background: none !important;
  border: none !important;
}
#swap-page button.open-currency-select-button:hover, #pool-page-button .open-currency-select-button:hover {
  background: none !important;
  border: none !important;
}
.inpt_tran {
  border: 2px solid #6e2d0a;
  border-radius: 16px;
  color: #6e2d0a;
  background-color: transparent !important;
}
.inpt_tran svg

{
  color: #6e2d0a;
  fill: #6e2d0a;
}
#swap-page button.btn_icon_center
{
  border-color:#6e2d0a !important;
}
.menulink.comingsoon
{
  box-shadow: none !important;
}
// .btn_menu_link
// {
//   box-shadow: 0px 0px 0px 0px rgb(14 14 44 / 40%) inset !important;
//   align-items: center;
//     border: 0;
//     cursor: pointer;
//     display: inline-flex;
//     font-family: inherit;
//     font-size: 16px;
//     font-weight: 600;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     -webkit-letter-spacing: 0.03em;
//     -moz-letter-spacing: 0.03em;
//     -ms-letter-spacing: 0.03em;
//     letter-spacing: 0.03em;
//     line-height: 1;
//     opacity: 1;
//     outline: 0;
//     -webkit-transition: background-color 0.2s,opacity 0.2s;
//     transition: background-color 0.2s,opacity 0.2s;
//     height: 32px;
//     padding: 0 16px;
// }
.comingsoon div
{
  background-image: url('/images/swap.png');
  background-position: right 15px center;
  background-repeat:no-repeat;
  background-size:50px;
}
`

export default GlobalStyle
