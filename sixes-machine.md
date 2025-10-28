---
layout: page
title: "Shop Sales Automation"
permalink: /projects/shop-sales-automation/
---

{% include head.html %}
{% include navbar.html %}
{% include page-hero.html %}
<main class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <video controls style="max-width:100%;border-radius:8px;margin-bottom:1.5rem;">
            <source src="/assets/images/Screen Recording 2025-05-22 105303.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div style="max-width:100%;border-radius:8px;background:var(--surface-dark);padding:2rem;min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--text);">
            <div style="font-size:3rem;margin-bottom:1rem;">⚙️</div>
            <div style="font-size:1.2rem;font-weight:600;">Shop Sales Automation</div>
            <div style="font-size:0.9rem;opacity:0.8;margin-top:0.5rem;">AutoHotkey Script</div>
          </div>
          <figcaption>Shop Sales Automation – AutoHotkey script in action</figcaption>
        </figure>
      </div>
      <h2>Project Overview</h2>
      <p>The <strong>Shop Sales Automation</strong> is a custom automation tool designed to streamline a repetitive task at work: filling the job column of every shop sale in MYOB with the number '6'. The script uses recorded mouse positions, clipboard checks, and row counting to automate the process, looping through each transaction until completion. It dramatically reduces manual effort and error, making a tedious process fast and reliable.</p>
      <h2>How It Works</h2>
      <ul>
        <li>Records mouse positions for key UI elements in MYOB.</li>
        <li>Counts rows in each transaction by copying cell data to the clipboard.</li>
        <li>Automatically enters '6' in the job column for each row.</li>
        <li>Loops through all transactions, pausing or stopping as needed.</li>
      </ul>

      <h2>Automation Script (AutoHotkey)</h2>
      <p>The complete script is provided below for reference and learning purposes.</p>

      <div class="code-scroll">
      {% raw %}
      ```autohotkey
      #Persistent
      #SingleInstance Force
      SetBatchLines, -1              ; Run at maximum CPU utilization
      SetWorkingDir, %A_ScriptDir%   ; Ensure the script runs in its own directory
      CoordMode, Mouse, Screen        ; Use screen coordinates for mouse actions
      SetTitleMatchMode, 2            ; Allows partial matching of window titles
      DetectHiddenWindows, On         ; Ensure hidden windows are detected

      ; ------------------------------------
      ; Configuration Section
      ; ------------------------------------
      ; Define standard cursor IDs
      IDC_ARROW := 32512
      IDC_WAIT := 32514
      IDC_APPSTARTING := 32650

      ; Load the standard arrow cursor handle once
      hArrow := DllCall("LoadCursor", "Ptr", 0, "Int", IDC_ARROW, "Ptr")

      ; Define the path to the INI file
      IniFilePath := A_ScriptDir . "\ClickPositions.ini"

      ; Initialize ClickCoords array
      ClickCoords := []

      ; ------------------------------------
      ; Initialization Section
      ; ------------------------------------
      ; Attempt to read existing click coordinates from the INI file
      if (FileExist(IniFilePath)) {
          Loop, 4 {  ; Changed from 3 to 4
              index := A_Index
              IniRead, X, %IniFilePath%, Click%index%, X, 0
              IniRead, Y, %IniFilePath%, Click%index%, Y, 0
              if (X != 0 and Y != 0) {
                  ClickCoords.Push([X, Y])
              } else {
                  ClickCoords := []
                  break
              }
          }
          
          if (ClickCoords.Length() = 4) {  ; Changed from 3 to 4
              ToolTip, Click positions loaded successfully from the file.
              Sleep, 2000
              ToolTip
          } else {
              ClickCoords := []
              ToolTip, Click positions file is incomplete or corrupted. Please set new click positions using F1.
              Sleep, 3000
              ToolTip
          }
      } else {
          ToolTip, No saved click positions found. Please set them using F1.
          Sleep, 3000
          ToolTip
      }

      ; ------------------------------------
      ; Function Definitions
      ; ------------------------------------
      IsCursorNormal() {
          global IDC_ARROW, hArrow
          ; Define the CURSORINFO structure using VarSetCapacity
          VarSetCapacity(ci, 4 + 4 + A_PtrSize + 8, 0) ; DWORD cbSize + DWORD flags + HCURSOR hCursor + POINT ptScreenPos
          ; Set cbSize to the size of the structure
          NumPut(VarSetCapacity(ci), ci, 0, "UInt")
          ; Set flags to 1 (CURSOR_SHOWING)
          NumPut(1, ci, 4, "UInt")
          ; Call GetCursorInfo
          DllCall("GetCursorInfo", "Ptr", &ci, "UInt")
          ; Get hCursor from the structure
          hCursor := NumGet(ci, 8, "Ptr")
          return (hCursor = hArrow)
      }

      WaitForNormalCursor(Timeout := 30000) {  ; Default timeout: 30 seconds
          StartTime := A_TickCount
          while !IsCursorNormal() {
              Sleep, 100
              if (A_TickCount - StartTime > Timeout) {
                  MsgBox, 48, Timeout, The cursor did not return to normal state within %Timeout% milliseconds.`nExiting script.
                  ExitApp
              }
          }
      }

      WaitForWindowActive(WindowTitle, Timeout := 30000) {
          StartTime := A_TickCount
          while !WinActive(WindowTitle) {
              Sleep, 100
              if (A_TickCount - StartTime > Timeout) {
                  MsgBox, 48, Timeout, The window "%WindowTitle%" did not become active within %Timeout% milliseconds.`nExiting script.
                  ExitApp
              }
          }
      }

      CountRows() {
          rowCount := 0
          Loop {
              Clipboard := ""
              SendInput, ^c
              ClipWait, 1  ; Wait up to 1 second for clipboard data
              cellData := Trim(Clipboard)
              Clipboard := ""
              if (cellData = "" || InStr(cellData, "Description")) {
                  break
              } else {
                  rowCount++
                  SendInput, {Down}
                  Sleep, 50  ; Minimal delay to allow UI to update
              }
          }
          return rowCount
      }

      ; ------------------------------------
      ; Hotkey Definitions
      ; ------------------------------------
      ; Hotkey: F1 - Set Click Locations
      F1::
          ClickCount := 4  ; Changed from 3 to 4
          ClickCoords := []  ; Reset the array

          Loop, %ClickCount% {
              index := A_Index
              MsgBox, 64, Set Click Location, Click on location %index% and press Enter.
              KeyWait, Enter, D
              MouseGetPos, X, Y
              ClickCoords.Push([X, Y])
              MsgBox, 64, Click Location Set, Click location %index% set at (%X%, %Y%).
          }

          ; Save the coordinates to the INI file using temporary variables
          Loop, %ClickCount% {
              index := A_Index
              tempX := ClickCoords[index][1]
              tempY := ClickCoords[index][2]
              IniWrite, %tempX%, %IniFilePath%, Click%index%, X
              IniWrite, %tempY%, %IniFilePath%, Click%index%, Y
          }

          MsgBox, 64, Success, Click positions have been saved successfully.
      return

      ; Hotkey: F2 - Execute Automation Loop (start/resume automation)
      F2::
          if (ClickCoords.Length() < 4) {  ; Changed from 3 to 4
              MsgBox, 48, Missing Click Coordinates, Click coordinates are not set. Please press F1 to set them before running the automation.
              return
          }
          Loop {
              if GetKeyState("Esc", "P") {  ; Break the loop if Esc is pressed
                  MsgBox, 64, Script Terminated, The script has been terminated by the user.
                  break
              }

              ; Ensure MYOB window is active
              WinActivate, MYOB AccountRight
              WaitForWindowActive("MYOB AccountRight", 30000)
              WaitForNormalCursor()

              ; Move to the starting cell
              SendInput, {Home}
              Sleep, 100

              ; Move to the correct column if necessary
              SendInput, {Right}
              Sleep, 100

              ; Count the number of rows
              rowCount := CountRows()
              if (rowCount = 0) {
                  MsgBox, 48, No Rows Detected, No rows detected. Pausing automation.
                  break
              }

              ; Navigate back to the starting position
              SendInput, {Left 2}
              Sleep, 100
              Sleep, 100

              ; Perform the typing sequence for each row
              Loop, %rowCount% {
                  SendInput, 6
                  Sleep, 5   
                  SendInput, {Enter}
                  Sleep, 5
                  SendInput, {Up}
                  Sleep, 5
                  SendInput, {Left}
                  Sleep, 500
              }

              WaitForNormalCursor()

              ; Perform the clicks using temporary variables for coordinates
              x1 := ClickCoords[1][1]
              y1 := ClickCoords[1][2]
              x2 := ClickCoords[2][1]
              y2 := ClickCoords[2][2]
              x3 := ClickCoords[3][1]
              y3 := ClickCoords[3][2]
              x4 := ClickCoords[4][1]
              y4 := ClickCoords[4][2]

              MouseClick, left, %x1%, %y1%, 1, 0
              Sleep, 500
              WaitForNormalCursor()
              Sleep, 1750  ; Ensure cursor is normal before double-clicking
              MouseClick, left, %x2%, %y2%, 2, 0
              WaitForNormalCursor()
              Sleep, 1000
              MouseClick, left, %x3%, %y3%, 1, 0
              Sleep, 10
              MouseClick, left, %x4%, %y4%, 1, 0
              Sleep, 10

              ; === Clipboard Check ===
              Clipboard := ""
              SendInput, ^c
              ClipWait, 1
              if (Clipboard = "6") {
                  MsgBox, 64, Completion, Clipboard contains "6". Pausing automation. Press F2 to resume.
                  break  ; Exit the loop, pausing the automation
              } else if (Clipboard = "") {
                  continue
              }
          }
      return

      ; Hotkey: Esc - Exit the Script
      Esc::ExitApp
      ```
      {% endraw %}
      </div>

      <div style="text-align:center;margin:2rem 0;">
        <a href="/projects/" class="btn">← Back to all projects</a>
      </div>
    </div>
  </div>
</main>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>

{% include footer.html %} 