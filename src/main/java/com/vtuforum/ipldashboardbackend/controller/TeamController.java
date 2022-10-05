package com.vtuforum.ipldashboardbackend.controller;

import com.vtuforum.ipldashboardbackend.model.Team;
import com.vtuforum.ipldashboardbackend.repository.MatchRepository;
import com.vtuforum.ipldashboardbackend.repository.TeamRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
}
