package com.eternal_memory.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
data class TributeLetter(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0, // id는 자동 생성되므로 기본 값 설정

    @Column(nullable = false)
    val name: String,

    @Column(nullable = true)
    val ipAddress: String?,

    @Column(nullable = false)
    val content: String?,

    @Column(nullable = true)
    val createdAt: LocalDateTime?
)
