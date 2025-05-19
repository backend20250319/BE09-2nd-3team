"use client"

import { useEffect } from "react"
import stores from "@/data/stores.json"
import styles from "./Map.module.css"

export default function Map() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6c5cc719c6ca16c86da9676333a47736&autoload=false"
    script.async = true
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map")
        const options = {
          center: new window.kakao.maps.LatLng(37.502210, 127.025560),
          level: 5,
        }
        const map = new window.kakao.maps.Map(container, options)
        getCurrentPosition(map)
        addStores(map)
      })
    }
    document.head.appendChild(script)
  }, [])

  return <div id="map" style={{ width: "100%", height: "100%" }} />
}

function getCurrentPosition(map) {
  if (!navigator.geolocation) return
  navigator.geolocation.getCurrentPosition(
    (position) => {
      map.setCenter(new window.kakao.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ))
    }
  )
}

function addStores(map) {
  stores.forEach((store) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(store.location.lat, store.location.lng),
      title: store.title,
    })
    const infowindow = new window.kakao.maps.InfoWindow({
      content: createStoreInfoHTML(store),
    })
    window.kakao.maps.event.addListener(marker, "mouseover", () => {
      infowindow.open(map, marker)
      setTimeout(() => {
        const closeBtn = document.querySelector(`.${styles.btnStoreClose}`)
        if (closeBtn) {
          closeBtn.addEventListener("click", (e) => {
            e.preventDefault()
            infowindow.close()
          })
        }
      }, 0)
    })
    window.kakao.maps.event.addListener(marker, "mouseout", () => infowindow.close())
  })
}

function createStoreInfoHTML(store) {
  return `
    <div class="${styles.storeInfo}">
      <a href="#" class="${styles.btnStoreClose}">
        <img src="/images/btn_close_o.png">
      </a>
      <div class="${styles.title}">
        <div class="${styles.logo}"><img src="/images/pc/store_logo.png" alt="sulbing"></div>
        <div class="${styles.store}">${store.title}</div>
      </div>
      <ul class="${styles.storeInfoText}">
        <li>
          <strong class="${styles.tit}">매장주소</strong>
          <div class="${styles.con}">${store.address}</div>
        </li>
        <li>
          <strong class="${styles.tit}">전화번호</strong>
          <div class="${styles.con}">${store.phone}</div>
        </li>
        <li>
          <strong class="${styles.tit}">운영시간</strong>
          <div class="${styles.con}">${store.openingHours || '-'}</div>
        </li>
        <li>
          <strong class="${styles.tit}">배달주문</strong>
          <div class="${styles.con}">${store.isDeliveryAvailable ? '가능' : '불가능'}</div>
        </li>
      </ul>
    </div>
  `
}
