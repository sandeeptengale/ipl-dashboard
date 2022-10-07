package com.vtuforum.ipldashboardbackend.controller;

import com.vtuforum.ipldashboardbackend.model.Match;
import com.vtuforum.ipldashboardbackend.model.Team;
import com.vtuforum.ipldashboardbackend.repository.MatchRepository;
import com.vtuforum.ipldashboardbackend.repository.TeamRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }
    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = teamRepository.findByTeamName(teamName);
        team.setTeamList(matchRepository.findLatestMatches(teamName, 4));
        return team;
    }
    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatches(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return matchRepository.getMatchByTeamBetweenDates(teamName, startDate, endDate);
    }
}
