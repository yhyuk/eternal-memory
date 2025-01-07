package com.eternal_memory.controller

import com.eternal_memory.dto.TributeLetterRequest
import com.eternal_memory.dto.TributeLetterResponse
import com.eternal_memory.service.TributeService
import jakarta.servlet.http.HttpServletRequest
import lombok.RequiredArgsConstructor
import lombok.extern.slf4j.Slf4j
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
class TributeLetterController(
    private val tributeService: TributeService
) {
    @get:GetMapping
    val lottoNumbers: ResponseEntity<List<TributeLetterResponse>>
        get() {
            val letters = tributeService.tributeLetter
            return ResponseEntity.ok(letters)
        }

    @PostMapping
    fun createTributeLater(
        @RequestBody request: TributeLetterRequest,
        httpRequest: HttpServletRequest
    ): ResponseEntity<Void> {
        tributeService.createTributeLater(request, httpRequest)
        return ResponseEntity.ok().build()
    }

}
