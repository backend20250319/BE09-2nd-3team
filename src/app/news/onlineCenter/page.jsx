import styles from "../news.module.css";

export default function OnlineCenter() {
  return (
    <div className={styles.newsArea}>
      <div className={styles.newsTitle}>
        <img src="/images/news/onlineqna_title_01.png" alt="온라인 고객센터" />
      </div>

      <div className={styles.onlineCenterTxt}>
        서비스 및 고객 불편 사항 등을 남겨주시면 <br />
        영업일 10일 이내로 답변드리도록 하겠습니다.
      </div>

      <div className={styles.customerInputArea}>
        <div className={styles.inputItem}>
          <div className={`${styles.label} ${styles.req}`}>고객명</div>
          <div className={styles.inputArea}>
            <input type="text" maxLength="20" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={`${styles.label} ${styles.req}`}>연락처</div>
          <div className={styles.inputArea}>
            <select defaultValue="010" className={styles.input1}>
              <option value="010">010</option>
              <option value="011">011</option>
            </select>
            <span className="bar">-</span>
            <input type="text" maxLength="4" className={styles.input1} />
            <span className="phone-hyphen">-</span>
            <input type="text" maxLength="4" className={styles.input1} />
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={`${styles.label} ${styles.req}`}>이메일</div>
          <div className={styles.inputArea}>
            <input type="text" maxLength="20" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={styles.label}>상담분류</div>
          <div className={styles.inputArea}>
            <select defaultValue="매장서비스" className={styles.input}>
              <option value="매장서비스">매장서비스</option>
              <option value="온라인 쇼핑">온라인 쇼핑</option>
            </select>
          </div>
        </div>
        <br />

        <div className={styles.inputItem}>
          <div className={styles.label}>이용 매장명</div>
          <div className={styles.inputArea}>
            <input type="text" readOnly className={styles.input} />
            <button type="button" className={styles.search}>
              <img src="/images/news/btn_search.png" alt="검색" />
            </button>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className={styles.inputItem}>
          <div className={styles.label}>이용 방법</div>
          <div className={styles.inputArea}>
            <select defaultValue="매장방문" className={styles.input}>
              <option value="매장방문">매장방문</option>
              <option value="배달">배달</option>
              <option value="포장">포장</option>
            </select>
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={styles.label}>제품명</div>
          <div className={styles.inputArea}>
            <input type="text" maxLength="20" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={styles.label}>문의 유형</div>
          <div className={styles.inputArea}>
            <select defaultValue="레시피" className={styles.input}>
              <option value="레시피">레시피</option>
              <option value="위생">위생</option>
              <option value="서비스">서비스</option>
              <option value="이물질">이물질</option>
              <option value="기프티콘">기프티콘</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>

        <div className={`${styles.inputItem} ${styles.tall}`}>
          <div className={styles.label}>문의 내용</div>
          <div className={styles.inputArea}>
            <textarea className={`${styles.input} ${styles.textarea}`} />
          </div>
        </div>

        <div className={`${styles.fileset} `}>
          <div className={styles.inputArea}>
            <input type="file" className={styles.customFileInput} />
          </div>
        </div>

        <div className={`${styles.inputItem} ${styles.tall}`}>
          <div className={styles.label}>고객 요청사항</div>
          <div className={styles.inputArea}>
            <textarea className={`${styles.input} ${styles.textarea}`} />
          </div>
        </div>

        <div className={styles.inputItem}>
          <div className={`${styles.label} ${styles.req}`}>비밀번호</div>
          <div className={styles.inputArea}>
            <input type="text" maxLength="20" className={styles.input} />
          </div>
        </div>

        <div className={styles.ex}>
          <div className={styles.captchasection}>
            <img
              src="/images/news/kcaptcha_image.jpg"
              alt="캡차 이미지"
              className="captcha-img"
            />
            <input type="text" className={styles.captchainput} />

            <button className={styles.captchasound} title="음성듣기">
              <img src="/images/news/captcha2_1.png" alt="" />
            </button>
            <span></span>
            <button className={styles.captcharefresh} title="새로고침">
              <img src="/images/news/captcha2_2.png" alt="" />
            </button>
          </div>
          <p className="captcha-guidance">
            자동등록방지 숫자를 순서대로 입력하세요.
          </p>
          <div className={styles.center}>
            <div className={styles.agreecheckbox}>
              <input type="checkbox" id="agree" className={styles.fakeRadio} />
              <label htmlFor="agree">
                <span className={styles.pw}>
                  <strong>개인정보처리방침</strong>
                </span>
                <strong>을 읽었으며 이에 동의합니다.</strong>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} type="button">
            <img src="/images/news/btn_cancel.png" alt="취소" />
          </button>
          <button className={styles.submitButton} type="submit">
            <img src="/images/news/btn_write.png" alt="등록" />
          </button>
        </div>
      </div>
    </div>
  );
}
