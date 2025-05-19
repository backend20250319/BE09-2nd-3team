import styles from "../news.module.css"

export default function Notice() {
  return(
    <div className={styles.newsArea}>
        <div className={styles.newsTitle}>
          <img src="/images/news/notice_title.png" alt="새소식 &amp; 공지" />
        </div>

        {/* <ul class="noticeList">
	      <li>
            <a href="#" class="thumbItem" data-view="13">
              <div class="thumb"><img src="/new/data/notice/notice_thumb_aufybmz.png" alt=""></div>
              <div class="textArea">
                <div class="title">차림설빙 팥, 판매지점 확대!</div>
                <div class="date">25년 3월 13일 ~ 지속진행</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="thumbItem" data-view="10">
              <div class="thumb"><img src="/new/data/notice/notice_thumb_mymetsr.jpg" alt=""></div>
              <div class="textArea">
                <div class="title">설빙의 NEW BI 공개</div>
                <div class="date"></div>
              </div>
            </a>
          </li>
        </ul> */}
      </div>
  );
}