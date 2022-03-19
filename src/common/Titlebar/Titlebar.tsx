import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './Titlebar.scss'

function Titlebar({ pageName, backButton, backLinkTo, rightButtonIcon, rightButtonText, rightButtonLinkTo }: any) {
  
  if (pageName == null) {
    pageName = "NO PAGE NAME"
  }
  if (backLinkTo == null) {
    backLinkTo = "#"
  }
  if (rightButtonLinkTo == null) {
    rightButtonLinkTo = "#"
  }

  let dynamicClass;
  if (pageName) {
    dynamicClass = "title"
  }
  if (pageName && backButton) (
    dynamicClass = "back-title"
  )
  if (pageName && (rightButtonIcon || rightButtonText)) (
    dynamicClass = "title-button"
  )
  if (pageName && backButton && (rightButtonIcon || rightButtonText)) {
    dynamicClass = "back-title-button"
  }

  return (
    <div>
        <div className={"titlebar-container " + dynamicClass } >

        {backButton ? <Link to={ backLinkTo } className="back-button"><ArrowLeftOutlined /></Link> : ""}

        <div className="page-name">{pageName}</div>

        {((rightButtonIcon || rightButtonText) ?
          <Link to={ rightButtonLinkTo } className="right-button"><span className="icon">{rightButtonIcon}</span> <span className="text">{rightButtonText}</span></Link> : '')}

        </div>
    </div>
  )
}

export default Titlebar